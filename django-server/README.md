# Django Server for CarbonAltDel
This is the Django server for CarbonAltDel. It is a Django REST Framework API server that serves the data to the React frontend.

## Setup
1. Install Python 3.6.5
2. Install pipenv
3. Run `pipenv install` to install dependencies
4. Run `pipenv shell` to enter the virtual environment
5. Run `python manage.py migrate` to migrate the database
6. Run `python manage.py runserver` to start the server

## Dependencies
- Djoser: Authentication and User Management for Django REST Framework (https://djoser.readthedocs.io/en/latest/)
- Django REST Framework: Web API framework for Django (https://www.django-rest-framework.org/)
- Django REST Framework Simple JWT: JSON Web Token Authentication for Django REST Framework (https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
- Django CORS Headers: Django app for handling the server headers required for Cross-Origin Resource Sharing
- Django Filter: Generic filtering backend for Django REST Framework (https://django-filter.readthedocs.io/en/stable/)
- Stripe Python: Stripe API bindings for Python (https://stripe.com/docs/api/python)


## API
The API is documented using Swagger. To view the documentation, run the server and go to `localhost:8000/swagger/`.

## Testing
To run the tests, run `python manage.py test`.

## Deployment
The server is deployed on Heroku. To deploy, run `git push heroku master`.

## Contributing
1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push your changes to your fork
6. Create a pull request

## License
This project is not licensed for personal or commercial use.

