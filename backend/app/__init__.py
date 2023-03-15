from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from .utils import performAnalysis
from dotenv import load_dotenv
import os

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

@app.route('/images/demo')
def serve_image(path):
    load_dotenv()
    directory = os.environ.get('IMAGES_LOCATION')
    images = []
    for filename in os.listdir(directory):
        if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
            images.append(filename)
    return jsonify(images)


@app.route('/images/<location>', methods=['GET'])
def get_images(location):
    # get the path to the directory containing images
    load_dotenv()
    directory = os.environ.get('IMAGES_LOCATION')
    path_to_images = os.path.join(directory, location)
    
    # check if the directory exists
    if not os.path.isdir(path_to_images):
        return jsonify({'message': 'Directory not found'}), 404

    # get all the image files in the directory
    image_files = [os.path.join(location, f) for f in os.listdir(path_to_images) if f.endswith('.jpg') or f.endswith('.jpeg') or f.endswith('.png')]

    return jsonify({'images': image_files}), 200


if __name__ == "__main__":
    app.run(debug=True, use_debugger=False, use_reloader=True)
