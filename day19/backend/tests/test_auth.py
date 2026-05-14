def test_register_and_login(client):
    response = client.post(
        "/auth/register",
        json={"username": "tester", "email": "tester@example.com", "password": "secret123"},
    )
    assert response.status_code == 200
    assert response.json()["username"] == "tester"

    login_response = client.post(
        "/auth/login",
        data={"username": "tester", "password": "secret123"},
    )
    assert login_response.status_code == 200
    token_data = login_response.json()
    assert "access_token" in token_data
    assert token_data["token_type"] == "bearer"

    profile_response = client.get(
        "/auth/me",
        headers={"Authorization": f"Bearer {token_data['access_token']}"},
    )
    assert profile_response.status_code == 200
    assert profile_response.json()["email"] == "tester@example.com"
