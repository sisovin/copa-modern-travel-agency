from django.db import models

class Booking(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    destination = models.ForeignKey('destinations.Destination', on_delete=models.CASCADE)
    booking_date = models.DateTimeField(auto_now_add=True)
    travel_date = models.DateField()
    status = models.CharField(max_length=20, choices=[('pending', 'Pending'), ('confirmed', 'Confirmed'), ('cancelled', 'Cancelled')])

    def __str__(self):
        return f'Booking {self.id} for {self.user} to {self.destination}'
