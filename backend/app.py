from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.get("/")
def health_check():
    return jsonify({"status": "Backend is running"})


@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json(silent=True) or request.form

    name = data.get("name")
    email = data.get("email")
    course = data.get("course")
    message = data.get("message")

    return jsonify({
        "message": "Data received successfully",
        "name": name,
        "email": email,
        "course": course,
        "student_message": message
    })


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
