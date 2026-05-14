from io import StringIO


def login(client, username="tester", password="secret123"):
    response = client.post("/auth/login", data={"username": username, "password": password})
    if response.status_code != 200:
        client.post(
            "/auth/register",
            json={"username": username, "email": "tester@example.com", "password": password},
        )
        response = client.post("/auth/login", data={"username": username, "password": password})
    return response.json()["access_token"]


def test_export_import_contacts(client):
    token = login(client)
    headers = {"Authorization": f"Bearer {token}"}

    contact_response = client.post(
        "/contacts/",
        data={
            "full_name": "Alice Example",
            "email": "alice@example.com",
            "phone": "1234567890",
            "address": "101 Main St",
            "company": "Example Co",
            "job_title": "Developer",
            "notes": "Test contact",
            "is_favorite": "true",
        },
        headers=headers,
    )
    assert contact_response.status_code == 200
    assert contact_response.json()["full_name"] == "Alice Example"

    export_response = client.get("/contacts/export", headers=headers)
    assert export_response.status_code == 200
    assert export_response.headers["content-type"].startswith("text/csv")
    csv_text = export_response.text
    assert "Alice Example" in csv_text

    csv_file = StringIO(csv_text)
    files = {"file": ("contacts.csv", csv_file.getvalue(), "text/csv")}
    import_response = client.post("/contacts/import", files=files, headers=headers)
    assert import_response.status_code == 200
    assert "Imported" in import_response.json()["detail"]
