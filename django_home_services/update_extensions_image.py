import os
import sys

# Add the project directory to the Python path
project_root = os.path.dirname(os.path.abspath(__file__))
sys.path.append(project_root)

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'home_services_project.settings')
import django
django.setup()

from services.models import Service

def update_extensions_image():
    try:
        # Find the Extensions service
        extensions_service = Service.objects.filter(name__icontains='Extensions').first()
        
        if extensions_service:
            # Update the image path
            extensions_service.image = 'images/Extensions.jpeg'
            extensions_service.save()
            print(f"Successfully updated image for '{extensions_service.name}' service.")
        else:
            print("Could not find 'Extensions' service in the database.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    update_extensions_image()
