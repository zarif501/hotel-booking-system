from . import db

class Room(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    room_number = db.Column(db.String(10))
    room_type = db.Column(db.String(50))
    price = db.Column(db.Float)