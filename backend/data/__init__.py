from flask_cors import CORS
from flask import Flask, request, render_template, redirect
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3
import os

app = Flask(__name__)

# Database file path
DB_PATH = os.path.join(os.path.dirname(__file__), 'database.db')

# -----------------------------
# Initialize Database
# -----------------------------


def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()


init_db()  # Call once on app start

# -----------------------------
# Routes
# -----------------------------


@app.route('/')
def home():
    return "Hotel Booking System API running!"

# ---------- Signup ----------


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        email = request.form.get('email')
        password = request.form.get('password')
        hashed_password = generate_password_hash(password)

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        try:
            cursor.execute(
                "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
                (username, email, hashed_password)
            )
            conn.commit()
        except sqlite3.IntegrityError:
            return "User already exists!"
        finally:
            conn.close()

        return redirect('/login')

    return render_template('signup.html')

# ---------- Login ----------


@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute(
            "SELECT password FROM users WHERE username = ?", (username,))
        user = cursor.fetchone()
        conn.close()

        if user and check_password_hash(user[0], password):
            return f"Welcome, {username}!"
        else:
            error = "Invalid username or password"

    return render_template('login.html', error=error)

# to allow React frontend to call backend
#app = Flask(__name__)
#CORS(app)  # allow React frontend to call backend
