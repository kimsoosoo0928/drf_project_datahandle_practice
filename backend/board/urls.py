from django.conf.urls import url
from .views import Posts

urlpatterns = [
    url('/posts', Posts.as_view())
]