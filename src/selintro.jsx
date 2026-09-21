import React from 'react'

export default function selintro() {
  return (
    <div className="profile-card">
        <div className="profile-header"> 
            <div className="profile-icon">DP</div> 
            <h1>Dinesh Pandian</h1>
            <p className="role">Java Developer</p>
        </div>

        <div className="profile-content">
            <div className="info-section">
                <h2>About Me</h2>
                <p> I am a passionate Java Developer interested in building scalable and efficient software applications. I enjoy learning new technologies and improving my programming skills. </p> 
            </div>
            <div className="info-section">
                <h2>Education</h2>
                <p> Bachelor of Engineering in Electronics and Communication Engineering. </p>
            </div>
            <div className="info-section">
                <h2>Skills</h2>
                 <div className="skills">
                    <span>Java</span> 
                    <span>JavaScript</span> 
                    <span>HTML</span> 
                    <span>CSS</span> 
                    <span>React</span> 
                    <span>Git</span> 
                    <span>SQL</span> 
                </div> 
            </div>
            <div className="info-section"> 
                <h2>Experience</h2> 
                <p> Currently working as a Java Developer and gaining practical experience in software development. </p> 
            </div>
            <div className="info-section"> 
                <h2>Hobbies & Interests</h2> 
                <p> Coding, learning new technologies, watching movies, listening to music and exploring new ideas. </p> 
            </div>
        </div>
    </div>
  )
}
