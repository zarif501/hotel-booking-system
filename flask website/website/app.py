from database import create_tables

create_tables()


def login(email, password):
    import sqlite3
    conn = sqlite3.connect('hotel.db')
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email=? AND password=?", (email, password))
    user = cursor.fetchone()

    conn.close()

    return user
