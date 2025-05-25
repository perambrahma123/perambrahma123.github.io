<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>P V BRAHMA | Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Global Styles */
        :root {
            --primary-color: #2a9d8f;
            --secondary-color: #264653;
            --accent-color: #e9c46a;
            --dark-accent: #f4a261;
            --light-color: #f8f9fa;
            --dark-color: #212529;
            --text-color: #495057;
            --text-light: #6c757d;
            --white: #ffffff;
            --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
            --border-radius: 8px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--white);
            overflow-x: hidden;
        }

        a {
            text-decoration: none;
            color: var(--primary-color);
            transition: var(--transition);
        }

        a:hover {
            color: var(--dark-accent);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        section {
            padding: 6rem 0;
        }

        h1, h2, h3, h4 {
            margin-bottom: 1.5rem;
            line-height: 1.2;
            font-weight: 600;
        }

        h1 {
            font-size: 3rem;
            color: var(--secondary-color);
        }

        h2 {
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 3rem;
            color: var(--secondary-color);
            position: relative;
        }

        h2::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            border-radius: 2px;
        }

        h3 {
            font-size: 1.8rem;
            color: var(--secondary-color);
        }

        p {
            margin-bottom: 1rem;
            color: var(--text-light);
        }

        img {
            max-width: 100%;
            height: auto;
        }

        .btn {
            display: inline-block;
            background: linear-gradient(135deg, var(--primary-color), var(--dark-accent));
            color: var(--white);
            padding: 0.8rem 1.8rem;
            border: none;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: var(--transition);
            font-weight: 500;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .btn-outline {
            background: transparent;
            border: 2px solid var(--primary-color);
            color: var(--primary-color);
        }

        .btn-outline:hover {
            background: var(--primary-color);
            color: var(--white);
        }

        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .text-center {
            text-align: center;
        }

        /* Header & Navigation */
        header {
            background-color: rgba(255, 255, 255, 0.95);
            box-shadow: var(--shadow);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            transition: var(--transition);
            backdrop-filter: blur(5px);
        }

        .header-scrolled {
            background-color: rgba(255, 255, 255, 0.98);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 0.5rem 0;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: 700;
            color: var(--secondary-color);
        }

        .logo span {
            color: var(--primary-color);
        }

        .nav-links {
            display: flex;
            list-style: none;
        }

        .nav-links li {
            margin-left: 2rem;
            position: relative;
        }

        .nav-links a {
            color: var(--secondary-color);
            font-weight: 500;
            transition: var(--transition);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--accent-color);
            transition: var(--transition);
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        .hamburger {
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
            color: var(--secondary-color);
        }

        /* Hero Section */
        #hero {
            height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, rgba(42, 157, 143, 0.1) 0%, rgba(233, 196, 106, 0.1) 100%);
            position: relative;
            overflow: hidden;
        }

        .hero-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            position: relative;
            z-index: 1;
        }

        .hero-text {
            flex: 1;
            min-width: 300px;
            padding-right: 2rem;
        }

        .hero-text h1 {
            margin-bottom: 1rem;
        }

        .hero-text p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            color: var(--text-color);
        }

        .hero-image {
            flex: 1;
            min-width: 300px;
            text-align: center;
            position: relative;
        }

        .hero-image img {
            width: 320px;
            height: 320px;
            border-radius: 50%;
            object-fit: cover;
            border: 8px solid rgba(233, 196, 106, 0.3);
            box-shadow: var(--shadow);
        }

        .hero-btns {
            display: flex;
            gap: 1rem;
            margin-top: 2rem;
        }

        .social-icons {
            margin-top: 2rem;
        }

        .social-icons a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            width: 40px;
            height: 40px;
            background-color: var(--light-color);
            border-radius: 50%;
            font-size: 1.2rem;
            color: var(--secondary-color);
            transition: var(--transition);
            box-shadow: var(--shadow);
        }

        .social-icons a:hover {
            background-color: var(--primary-color);
            color: var(--white);
            transform: translateY(-3px);
        }

        /* About Section */
        #about {
            background-color: var(--light-color);
        }

        .about-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .about-text {
            flex: 1;
            min-width: 300px;
            padding-right: 2rem;
        }

        .about-text h3 {
            margin-bottom: 1.5rem;
        }

        .about-info {
            flex: 1;
            min-width: 300px;
            background-color: var(--white);
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }

        .info-item {
            display: flex;
            margin-bottom: 1.5rem;
        }

        .info-item i {
            margin-right: 1rem;
            color: var(--primary-color);
            font-size: 1.2rem;
            margin-top: 3px;
        }

        /* Education Section */
        .education-item {
            background-color: var(--white);
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            transition: var(--transition);
            border-left: 4px solid var(--primary-color);
        }

        .education-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .education-item h3 {
            margin-bottom: 0.5rem;
        }

        .education-item p {
            margin-bottom: 0.5rem;
        }

        .education-item .date {
            color: var(--primary-color);
            font-weight: 500;
        }

        /* Certifications Section */
        #certifications {
            background-color: var(--light-color);
        }

        .certifications-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .certification-card {
            background-color: var(--white);
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            transition: var(--transition);
            border-top: 3px solid var(--accent-color);
        }

        .certification-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .certification-card h3 {
            margin-bottom: 1rem;
        }

        .certification-card p {
            margin-bottom: 1rem;
        }

        .certification-nav {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
        }

        /* Projects Section */
        .projects-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background-color: var(--white);
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: var(--transition);
        }

        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .project-img {
            height: 200px;
            overflow: hidden;
        }

        .project-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: var(--transition);
        }

        .project-card:hover .project-img img {
            transform: scale(1.1);
        }

        .project-content {
            padding: 2rem;
        }

        .project-content h3 {
            margin-bottom: 1rem;
        }

        .project-content p {
            margin-bottom: 1.5rem;
        }

        .project-tools {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 1.5rem;
            gap: 0.5rem;
        }

        .project-tools span {
            background-color: var(--light-color);
            color: var(--primary-color);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }

        /* Achievements Section */
        #achievements {
            background-color: var(--light-color);
        }

        .achievements-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .achievement-card {
            background-color: var(--white);
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            transition: var(--transition);
            border-bottom: 3px solid var(--accent-color);
        }

        .achievement-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .achievement-card h3 {
            margin-bottom: 1rem;
        }

        .achievement-card p {
            margin-bottom: 1rem;
        }

        /* Skills Section */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .skill-category {
            background-color: var(--white);
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }

        .skill-category h3 {
            margin-bottom: 1.5rem;
            text-align: center;
        }

        .skill-item {
            margin-bottom: 1.5rem;
        }

        .skill-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }

        .skill-bar {
            height: 10px;
            background-color: var(--light-color);
            border-radius: 5px;
            overflow: hidden;
        }

        .skill-progress {
            height: 100%;
            background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
            border-radius: 5px;
            transition: width 1s ease;
        }

        /* Contact Section */
        #contact {
            background-color: var(--light-color);
        }

        .contact-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 3rem;
        }

        .contact-info {
            margin-bottom: 2rem;
        }

        .contact-info h3 {
            margin-bottom: 1.5rem;
        }

        .contact-info p {
            margin-bottom: 1.5rem;
        }

        .contact-form {
            background-color: var(--white);
            padding: 2rem;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
        }

        .contact-form h3 {
            margin-bottom: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--secondary-color);
        }

        .form-control {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
            font-family: inherit;
            transition: var(--transition);
        }

        .form-control:focus {
            outline: none;
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.2);
        }

        textarea.form-control {
            min-height: 150px;
            resize: vertical;
        }

        /* Footer */
        footer {
            background-color: var(--secondary-color);
            color: var(--white);
            padding: 3rem 0;
            text-align: center;
        }

        .footer-content p {
            color: var(--white);
            margin-bottom: 1.5rem;
        }

        .footer-social a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 0 0.5rem;
            width: 40px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--white);
            border-radius: 50%;
            font-size: 1.2rem;
            transition: var(--transition);
        }

        .footer-social a:hover {
            background-color: var(--primary-color);
            transform: translateY(-3px);
        }

        .back-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: linear-gradient(135deg, var(--primary-color), var(--dark-accent));
            color: var(--white);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            box-shadow: var(--shadow);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
            z-index: 999;
        }

        .back-to-top.active {
            opacity: 1;
            visibility: visible;
        }

        .back-to-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        /* Animations */
        .hidden {
            opacity: 0;
            transform: translateY(50px);
            transition: all 1s ease;
        }

        .show {
            opacity: 1;
            transform: translateY(0);
        }

        /* Toast Notification */
        .toast {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--primary-color);
            color: white;
            padding: 12px 24px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .toast.show {
            opacity: 1;
        }

        /* Responsive Styles */
        @media (max-width: 992px) {
            section {
                padding: 4rem 0;
            }

            h1 {
                font-size: 2.5rem;
            }

            h2 {
                font-size: 2rem;
            }

            h3 {
                font-size: 1.5rem;
            }
        }

        @media (max-width: 768px) {
            .hamburger {
                display: block;
            }

            .nav-links {
                position: fixed;
                top: 80px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 80px);
                background-color: var(--white);
                flex-direction: column;
                align-items: center;
                padding: 2rem 0;
                transition: var(--transition);
            }

            .nav-links.active {
                left: 0;
            }

            .nav-links li {
                margin: 1rem 0;
            }

            .hero-text, .about-text, .about-info {
                padding-right: 0;
                margin-bottom: 2rem;
            }

            .hero-content, .about-content {
                flex-direction: column;
            }

            .hero-image img {
                width: 250px;
                height: 250px;
            }

            .hero-btns {
                flex-direction: column;
                gap: 1rem;
            }

            .btn {
                width: 100%;
            }

            .certification-card {
                display: none;
            }

            .certification-card:first-child {
                display: block;
            }
        }

        @media (max-width: 576px) {
            .container {
                padding: 0 1rem;
            }

            section {
                padding: 3rem 0;
            }

            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.8rem;
            }
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header & Navigation -->
    <header id="header">
        <div class="container">
            <nav>
                <div class="logo"><span>P V BRAHMA</span></div>
                <ul class="nav-links">
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#certifications">Certifications</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#achievements">Achievements</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="hamburger">
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section id="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <h1>Hi, I'm <span>   P V BRAHMA</span></h1>
                    <p>Computer Science Engineer | AI Enthusiast | Problem Solver</p>
                    <div class="hero-btns">
                        <a href="#contact" class="btn">Contact Me</a>
                        <a href="#" class="btn btn-outline" id="downloadResume">Download Resume</a>
                    </div>
                    <div class="social-icons">
                        <a href="https://linkedin.com/in/peramvenkatabrahmareddy" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/perambrahma123" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="mailto:2100030430cseh@gmail.com"><i class="fas fa-envelope"></i></a>
                        <a href="tel:+919515386417"><i class="fas fa-phone"></i></a>
                    </div>
                </div>
                <div class="hero-image">
                    <img src="https://res.cloudinary.com/dtwocoq4y/image/upload/v1748185866/photo_2025-05-25_20-36-13_orah8p.jpg" alt="P V BRAHMA">
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="hidden">
        <div class="container">
            <h2>About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <h3>Who Am I?</h3>
                    <p>I'm a passionate Computer Science Engineer with a strong interest in AI and software development. I enjoy solving complex problems and creating innovative solutions that make a difference.</p>
                    <p>With a solid educational background and hands-on experience in various projects, I'm constantly learning and expanding my skill set to stay at the forefront of technology.</p>
                </div>
                <div class="about-info">
                    <div class="info-item">
                        <i class="fas fa-user"></i>
                        <div>
                            <h4>Name</h4>
                            <p>P Venkata Brahma Reddy</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4>Phone</h4>
                            <p>+91-9515386417</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <p>2100030430cseh@gmail.com</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <p>Andhra Pradesh, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="hidden">
        <div class="container">
            <h2>Education</h2>
            <div class="education-item">
                <h3>B.Tech in Computer Science and Engineering</h3>
                <p class="date">2021 - 2025</p>
                <p>KL University, Andhra Pradesh</p>
                <p>CGPA: 8.72</p>
            </div>
            <div class="education-item">
                <h3>Senior Secondary Education</h3>
                <p class="date">2019 - 2021</p>
                <p>Narayana Junior College, Andhra Pradesh</p>
                <p>GPA: 9.44</p>
            </div>
            <div class="education-item">
                <h3>Secondary Education</h3>
                <p class="date">2018 - 2019</p>
                <p>Oxford Public School, Andhra Pradesh</p>
                <p>GPA: 9.5</p>
            </div>
        </div>
    </section>

   <!-- Certifications Section -->
<section id="certifications" class="hidden">
        <div class="container">
            <h2>Certifications</h2>
            <div class="certifications-container">
                <div class="certification-card">
                    <h3>Salesforce AI Associate</h3>
                    <p>Salesforce</p>
                    <p>Certified in AI fundamentals and applications within the Salesforce ecosystem.</p>
                    <a href="https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=jpfnEzJw9T/qk2RIDoXODVdJCIEKo+JLX/jWyxn1SEyOCaxBaaa0zYGxDq4RxNKt" 
                       target="_blank" 
                       class="btn btn-outline" 
                       style="margin-top: 1rem;">
                       View Credential
                    </a>
                </div>
                
                <div class="certification-card">
                    <h3>Fintech Professional Certificate</h3>
                    <p>Fintech Council of India</p>
                    <p>Gained expertise in financial technologies and their applications in modern banking.</p>
                    <a href="https://drive.google.com/file/d/1p2mqr51ELKub1dNyLlAdVfOdK_CdSXYh/view?usp=drive_link" 
                       target="_blank" 
                       class="btn btn-outline" 
                       style="margin-top: 1rem;">
                       View Certificate
                    </a>
                </div>
                
                <div class="certification-card">
                    <h3>Automation Anywhere RPA Professional</h3>
                    <p>Automation Anywhere University</p>
                    <p>Certified in Robotic Process Automation essentials and implementation.</p>
                    <a href="https://www.credential.net/d359effc-2dc5-45f9-a8d0-2666af1724f2#gs.fcxfh8" 
                       target="_blank" 
                       class="btn btn-outline" 
                       style="margin-top: 1rem;">
                       View Credential
                    </a>
                </div>
                
                <div class="certification-card">
                    <h3>Oracle Cloud Infrastructure</h3>
                    <p>Oracle</p>
                    <p>Certified in Oracle Cloud Infrastructure foundations and services.</p>
                    <a href="https://www.linkedin.com/posts/peramvenkatabrahmareddy_oracle-cloud-infrastructure-2023-certified-activity-7206888599840067584-80m-?utm_source=share&utm_medium=member_desktop" 
                       target="_blank" 
                       class="btn btn-outline" 
                       style="margin-top: 1rem;">
                       View Certificate
                    </a>
                </div>
            </div>
        
        <!-- Navigation Buttons -->
        <div class="certification-nav" style="display: flex; justify-content: center; gap: 1rem; margin-top: 2rem;">
            <button id="prevCert" class="btn btn-outline">
                <i class="fas fa-chevron-left"></i> Previous
            </button>
            <button id="nextCert" class="btn btn-outline">
                Next <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>
</section>

    <!-- Projects Section -->
    <section id="projects" class="hidden">
        <div class="container">
            <h2>Projects</h2>
            <div class="projects-container">
                <div class="project-card">
                    <div class="project-img">
                        <img src="https://res.cloudinary.com/dtwocoq4y/image/upload/v1748187480/drowsy-driving-i19877681_mc6nkq.jpg" alt="Drowsiness Detection">
                    </div>
                    <div class="project-content">
                        <h3>Real-Time Drowsiness Detection System</h3>
                        <p>A system that detects driver drowsiness in real-time using facial landmarks and alerts the driver.</p>
                        <div class="project-tools">
                            <span>Python</span>
                            <span>OpenCV</span>
                            <span>MediaPipe</span>
                            <span>FaceMesh</span>
                        </div>
                        <p><strong>Highlights:</strong> Real-time EAR detection, audio-visual alerts, webcam integration</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-img">
                        <img src="https://res.cloudinary.com/dtwocoq4y/image/upload/v1748187858/automated-inventory-management-systems-the-LMB-industry.jpg_cgicil.jpg" alt="E-Commerce Inventory">
                    </div>
                    <div class="project-content">
                        <h3>E-Commerce Inventory Management System</h3>
                        <p>A desktop application for managing inventory with CRUD operations and optimized file storage.</p>
                        <div class="project-tools">
                            <span>Java</span>
                            <span>JavaFX</span>
                            <span>File I/O</span>
                        </div>
                        <p><strong>Highlights:</strong> User-friendly GUI, efficient CRUD operations, optimized file storage</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Achievements Section -->
    <section id="achievements" class="hidden">
        <div class="container">
            <h2>Achievements</h2>
            <div class="achievements-container">
                <div class="achievement-card">
                    <h3>Smart India Hackathon 2023</h3>
                    <p>Reached pre-finals with an innovative e-waste management system solution.</p>
                </div>
                <div class="achievement-card">
                    <h3>i.Mobilothon 4.0 (Volkswagen)</h3>
                    <p>Advanced to prototype round with the drowsiness detection system project.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="hidden">
        <div class="container">
            <h2>Skills</h2>
            <div class="skills-container">
                <div class="skill-category">
                    <h3>Technical Skills</h3>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Java</span>
                            <span>85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 85%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Python</span>
                            <span>80%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 80%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>SQL</span>
                            <span>75%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 75%;"></div>
                        </div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Tools</h3>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Git</span>
                            <span>80%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 80%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>GitHub</span>
                            <span>85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 85%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>OpenCV</span>
                            <span>70%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 70%;"></div>
                        </div>
                    </div>
                </div>
                <div class="skill-category">
                    <h3>Soft Skills</h3>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Leadership</span>
                            <span>90%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 90%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Teamwork</span>
                            <span>85%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 85%;"></div>
                        </div>
                    </div>
                    <div class="skill-item">
                        <div class="skill-info">
                            <span>Problem Solving</span>
                            <span>88%</span>
                        </div>
                        <div class="skill-bar">
                            <div class="skill-progress" style="width: 88%;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="hidden">
        <div class="container">
            <h2>Contact Me</h2>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Get In Touch</h3>
                    <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                    <div class="info-item">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <p>2100030430cseh@gmail.com</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-phone"></i>
                        <div>
                            <h4>Phone</h4>
                            <p>+91-9515386417</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <p>Andhra Pradesh, India</p>
                        </div>
                    </div>
                    <div class="social-icons">
                        <a href="https://linkedin.com/in/peramvenkatabrahmareddy" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="https://github.com/perambrahma123" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="contact-form">
                    <h3>Send Me a Message</h3>
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" class="form-control" placeholder="Your Name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" class="form-control" placeholder="Your Email" required>
                        </div>
                        <div class="form-group">
                            <label for="subject">Subject</label>
                            <input type="text" id="subject" class="form-control" placeholder="Subject" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" class="form-control" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="logo">P <span>V BRAHMA</span></div>
                <p>Computer Science Engineer | AI Enthusiast | Problem Solver</p>
                <div class="footer-social">
                    <a href="https://linkedin.com/in/peramvenkatabrahmareddy" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a href="https://github.com/perambrahma123" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="mailto:2100030430cseh@gmail.com"><i class="fas fa-envelope"></i></a>
                </div>
                <p>&copy; 2023 P V BRAHMA. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <!-- Back to Top Button -->
    <a href="#hero" class="back-to-top"><i class="fas fa-arrow-up"></i></a>

    <!-- Toast Notification -->
    <div id="toast" class="toast"></div>

    <!-- JavaScript -->
   <script>
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });

    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        header.classList.toggle('header-scrolled', window.scrollY > 100);
    });

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });

    // Scroll Reveal Animation
    const hiddenElements = document.querySelectorAll('.hidden');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenElements.forEach(el => observer.observe(el));

    // Resume Download
    document.getElementById('downloadResume').addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Resume download starting...');
        
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1uzRrj1I3VhYE1lOkASnf3pV6vZFQdSs4';
        link.setAttribute('download', 'P_VBRAHMA_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Certifications Navigation
    const certCards = document.querySelectorAll('.certification-card');
    let currentCert = 0;
    
    function updateCertDisplay() {
        certCards.forEach((card, index) => {
            if (window.innerWidth < 768) {
                // Mobile view - show one at a time
                card.style.display = index === currentCert ? 'block' : 'none';
            } else {
                // Desktop view - show all
                card.style.display = 'block';
            }
        });
        
        // Update button states
        document.getElementById('prevCert').disabled = currentCert === 0;
        document.getElementById('nextCert').disabled = currentCert >= certCards.length - 1;
    }
    
    // Previous button
    document.getElementById('prevCert').addEventListener('click', () => {
        if (currentCert > 0) {
            currentCert--;
            updateCertDisplay();
        }
    });
    
    // Next button
    document.getElementById('nextCert').addEventListener('click', () => {
        if (currentCert < certCards.length - 1) {
            currentCert++;
            updateCertDisplay();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', updateCertDisplay);
    
    // Initialize certifications display
    updateCertDisplay();

    // Contact Form Submission
    document.getElementById('contactForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        try {
            // Using FormSubmit.co service to handle form submissions
            const response = await fetch('https://formsubmit.co/ajax/2100030430cseh@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                showToast('Message sent successfully!');
                form.reset();
            } else {
                showToast('Error sending message. Please try again.');
                console.error(result);
            }
        } catch (error) {
            showToast('Error sending message. Please try again.');
            console.error(error);
        }
    });

    // Toast Notification Function
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, {
        threshold: 0.5
    });

    skillBars.forEach(bar => skillObserver.observe(bar));
</script>
</body>
</html>
