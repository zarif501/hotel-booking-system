from flask import Blueprint, request, jsonify 
views = Blueprint('views', __name__)
@views.route('/add_room', methods=['GET', 'POST'])
def add_room():
    if request.method == 'POST':
        data =request.get_json()

        name = data.get('name')
        price = data.get('price')

        # save to database (later)

        return jsonify({"message": "Room added successfully"})
    return jsonify({"message": "Send POST request"})

@views.route('/rooms')
def rooms():
    rooms = []  # later from database
    return jsonify(rooms)

@views.route('/edit_room/<int:id>', methods=['GET', 'POST'])
def edit_room(id):
    if request.method == 'POST':
        # update database
        return jsonify({"message": "Room updated"})

    room = {}  # get from DB
    return jsonify(room)

@views.route('/bookings')
def bookings():
    bookings = []
    return jsonify(bookings)

@views.route('/delete_room/<int:id>', methods=['DELETE'])
def delete_room(id):
    return jsonify({"message": "Room deleted"})