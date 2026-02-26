 HEAD
from website import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)

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


def book_room(user_id, room_id, check_in, check_out):

    import sqlite3
    from datetime import datetime

    conn = sqlite3.connect('hotel.db')
    cursor = conn.cursor()

    # get room price
    cursor.execute("SELECT price FROM rooms WHERE room_id=?", (room_id,))
    price = cursor.fetchone()[0]

    # calculate days
    check_in = datetime.strptime(check_in, "%Y-%m-%d")
    check_out = datetime.strptime(check_out, "%Y-%m-%d")
    days = (check_out - check_in).days

    total_price = price * days

    # insert booking
    cursor.execute("""
    INSERT INTO bookings(user_id, room_id, check_in, check_out, total_price)
    VALUES (?,?,?,?,?)
    """, (user_id, room_id, check_in, check_out, total_price))

    conn.commit()
    conn.close()

    return total_price


def cancel_booking(booking_id):
    import sqlite3
    conn = sqlite3.connect('hotel.db')
    cursor = conn.cursor()

    cursor.execute(
        "UPDATE bookings SET status='cancelled' WHERE booking_id=?", (booking_id,))

    conn.commit()
    conn.close()

Total Price = Room Price × Number of Days
 ffac1cb9fcbc636a932f62ad7e0cfdabd66d5da3
