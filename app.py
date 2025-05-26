from flask import Flask, render_template

# Create the Flask app
app = Flask(__name__)

# === MAIN ROUTES ===

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


# === PROJECT SUB-PAGES ===

@app.route("/projects/python")
def projects_python():
    return render_template("projects/python.html")

@app.route("/projects/sql")
def projects_sql():
    return render_template("projects/sql.html")

@app.route("/projects/excel")
def projects_excel():
    return render_template("projects/excel.html")

@app.route("/projects/tableau")
def projects_tableau():
    return render_template("projects/tableau.html")


# === RUN THE APP ===
if __name__ == '__main__':
    app.run(debug=True)
