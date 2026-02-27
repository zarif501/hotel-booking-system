from flask import Flask, render_template, request, redirect, url_for


def create_app():
    app = Flask(__name__)

    # Homepage route
    @app.route('/')
    def home():
        return render_template('home.html')

    # Login page route
    @app.route('/login', methods=['GET', 'POST'])
    def login():
        if request.method == 'POST':
            username = request.form.get('username')
            password = request.form.get('password')
            # Add your authentication logic here
            if username == "admin" and password == "1234":  # Example
                return redirect(url_for('home'))
            else:
                return render_template('login.html', error="Invalid credentials")
        return render_template('login.html')

    return app
