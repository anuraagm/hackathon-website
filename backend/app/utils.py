import os
import jinja2
from datetime import datetime
import subprocess
from dotenv import load_dotenv

def performAnalysis(latmin, lonmin, latmax, lonmax, flood_date, project_name):
    try:
        load_dotenv()
        template_str = None
        conda_env_name = 'floodpy'
        date_obj = datetime.strptime(flood_date, '%Y-%m-%d')
        formatted_date = date_obj.strftime('%Y%m%dT%H%M%S')
        
        activate_conda_env = f'conda activate {conda_env_name}'
        
        subprocess.call(activate_conda_env, shell=True)

        print("flood date : ",flood_date)
        with open(os.path.join(os.getcwd(),"app/templates/Format_FLOODPYapp_template.txt"), "r") as f:
            template_str = f.read()
        
        project_folder = os.environ.get('PROJECT_FOLDER')
        src_dir = os.environ.get('SRC_DIR')
        snap_dir = os.environ.get('SNAP_DIR')
        GPTBIN_PATH = os.environ.get('GPTBIN_PATH')
        scihub_username = os.environ.get('SCIHUB_USERNAME')
        scihub_password = os.environ.get('SCIHUB_PASSWORD')
        aria_username = os.environ.get('ARIA_USERNAME')
        aria_password = os.environ.get('ARIA_PASSWORD')
        # flood_date = datetime.datetime.now().strftime("%Y-%m-%dT%H:%M:%SZ")

        template = jinja2.Template(template_str)
        config_text = template.render(latmin=latmin, lonmin=lonmin, latmax=latmax, 
        lonmax=lonmax, flood_date=formatted_date, projectname=project_name, projectfolder=project_folder, 
        src_dir=src_dir, snap_dir=snap_dir, GPTBIN_PATH=GPTBIN_PATH, scihub_username=scihub_username,
        scihub_password=scihub_password, aria_username=aria_username, aria_password=aria_password)

        with open(os.path.join(os.getcwd(),"app/templates/FLOODPYapp_template.cfg"), "w") as f:
            f.write(config_text)
        
        result = subprocess.call("FLOODPYapp.py app/templates/FLOODPYapp_template.cfg", shell=True)
        return result

    except Exception as e:
        print(e)
        return None