from django.urls import path
from .views import BlacklistTokenUpdateView, CustomUserCreate, WhoAmI, checkUserId

app_name = 'users'

urlpatterns = [
    path('whoami/',WhoAmI.as_view(), name="whoami"),
    path('register/', CustomUserCreate.as_view(), name='create_user'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
    path('checkuserid/<str:username>/', checkUserId, name='checkuserid'),
]
