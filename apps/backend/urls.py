from django.urls import include, path
from rest_framework.routers import DefaultRouter
from users.views import UserViewSet
from destinations.views import DestinationViewSet
from bookings.views import BookingViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'destinations', DestinationViewSet)
router.register(r'bookings', BookingViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
