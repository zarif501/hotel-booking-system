from database import create_tables

create_tables()

# login
def login(email, password):
    import sqlite3
    conn = sqlite3.connect('hotel_db.sql')
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE email=? AND password=?", (email, password))
    user = cursor.fetchone()

    conn.close()

    return user

# book_room
def book_room(user_id, room_id, check_in, check_out):

    import sqlite3
    from datetime import datetime

    conn = sqlite3.connect('hotel_db.sql')
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

#cancel_booking
def cancel_booking(booking_id):
    import sqlite3
    conn = sqlite3.connect('hotel.db')
    cursor = conn.cursor()

    cursor.execute(
        "UPDATE bookings SET status='cancelled' WHERE booking_id=?", (booking_id,))

    conn.commit()
    conn.close()
#price calculation
Total Price = Room Price × Number of Days