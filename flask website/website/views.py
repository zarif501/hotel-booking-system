@views.route('/add_room', methods=['GET', 'POST'])
def add_room():
    if request.method == 'POST':
        name = request.form.get('room_name')
        price = request.form.get('price')

        # save to database (later)

        return redirect('/rooms')

    return render_template('add_room.html')

@views.route('/rooms')
def rooms():
    rooms = []  # later from database
    return render_template('rooms.html', rooms=rooms)

@views.route('/edit_room/<int:id>', methods=['GET', 'POST'])
def edit_room(id):
    if request.method == 'POST':
        # update database
        return redirect('/rooms')

    room = {}  # get from DB
    return render_template('edit_room.html', room=room)

@views.route('/bookings')
def bookings():
    bookings = []
    return render_template('bookings.html', bookings=bookings)