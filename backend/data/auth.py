from flask import Blueprint

auth = Blueprint('auth', __name__)

@auth.route('/login')
def login():
    return "<p>Login page</p>"

@auth.route('/logout')
def logout():
    return "<p>Logout page</p>"

@auth.route('/sign-up')
def sign_up():
    return "<p>Sign up page</p>"
