from django.db import migrations, models
import django.contrib.auth.models
import django.utils.timezone

class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('first_name', models.CharField(blank=True, max_length=30)),
                ('last_name', models.CharField(blank=True, max_length=30)),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now)),
                ('groups', models.ManyToManyField(blank=True, related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Destination',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('location', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to='destinations/')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('booking_date', models.DateTimeField(auto_now_add=True)),
                ('travel_date', models.DateField()),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('confirmed', 'Confirmed'), ('cancelled', 'Cancelled')], max_length=20)),
                ('destination', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='destinations.Destination')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.User')),
            ],
        ),
        migrations.RunPython(
            code=create_sample_data,
            reverse_code=migrations.RunPython.noop,
        ),
    ]

def create_sample_data(apps, schema_editor):
    User = apps.get_model('users', 'User')
    Destination = apps.get_model('destinations', 'Destination')

    # Create sample user roles
    User.objects.create_superuser(email='admin@example.com', password='admin123')
    User.objects.create_user(email='user@example.com', password='user123')

    # Create sample destinations
    Destination.objects.create(name='Paris', description='The city of lights', location='France', image='paris.jpg')
    Destination.objects.create(name='New York', description='The city that never sleeps', location='USA', image='new_york.jpg')
    Destination.objects.create(name='Tokyo', description='The land of the rising sun', location='Japan', image='tokyo.jpg')
