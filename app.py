from flask import Flask, render_template, request, jsonify # pyright: ignore[reportMissingImports]
from flask_cors import CORS # type: ignore

app = Flask(__name__)
CORS(app)

# Render frontend page
@app.route("/")
def home():
    return render_template("index.html")

# API endpoint
@app.route("/api/data", methods=["POST"])
def get_data():
    user_input = request.json.get("text")
    reply = f"Backend received: {user_input}"
    return jsonify({"message": reply})

if __name__ == "__main__":
    app.run(debug=True)
