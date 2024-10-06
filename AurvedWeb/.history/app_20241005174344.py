from flask import Flask, render_template, request, redirect, url_for, flash 
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Change this to a random secret key
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # Limit upload size to 16 MB

# Define allowed extensions for video and file uploads
ALLOWED_EXTENSIONS = {'mp4'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload():
    if request.method == 'POST':
        if 'files[]' not in request.files:
            flash('No file part')
            return redirect(request.url)
        
        files = request.files.getlist('files[]')
        for file in files:
            if file and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        
        flash('Videos uploaded successfully!')
        return redirect(url_for('upload'))

    return render_template('upload.html')

@app.route('/consultation', methods=['GET', 'POST'])
def consultation():
    if request.method == 'POST':
        # Here, you would typically save the consultation request to a database
        flash('Consultation booked successfully!')
        return redirect(url_for('consultation'))
    
    return render_template('consultation.html')

@app.route('/patient_info', methods=['GET', 'POST'])
def patient_info():
    if request.method == 'POST':
        # Here, you would typically save patient information to a database
        flash('Patient information submitted successfully!')
        return redirect(url_for('patient_info'))
    
    return render_template('patient_info.html')

if __name__ == '__main__':
    app.run(debug=True)
