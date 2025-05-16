from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class TokenObtainPairView(TokenObtainPairView):
    pass

class TokenRefreshView(TokenRefreshView):
    pass
