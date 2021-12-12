from flask import Flask, render_template, request, jsonfy

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('FAQ.html')

@app.route('/proccess', methods=['POST']')
def proccess():

    username = request.form['username']
	group = request.form['group']

    if group and username:
		newName = username[::-1]

		return jsonify({'name' : newName})

	return jsonify({'error' : 'Missing data!'}

if __name__ == '__main__':
    app.run(debug=True)
