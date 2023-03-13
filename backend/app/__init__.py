from flask import Flask, render_template, request
from flask_cors import CORS, cross_origin
from .utils import performAnalysis

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
def hello_world():
    return render_template('index.html')

@app.route("/map", methods=['POST'])
def map():
    try:
        # print("request : ",type(request.form))
        # print(request.get_json())
        data = request.get_json()
        print(data)
        project = data['project']
        latmin = data['latmin']
        lonmin = data['lonmin']
        latmax = data['latmax']
        lonmax = data['lonmax']
        flood_date = data['flood_date']
        # Do something with the data
        performAnalysis(project_name=project, latmin=latmin, latmax=latmax, lonmin=lonmin, lonmax=lonmax, flood_date=flood_date)
        return request.form
    except Exception as e:
        print(e)
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True, use_debugger=False, use_reloader=True)
