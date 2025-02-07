'use client'

import Image from "next/image";
import styles from "./page.module.css";
import LightboxGallery from "../../public/components/LightboxGallery";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {

  const images = [
    { src: "./images/PFPs/pfp.png", title: "Photo 1"}
  ]
  const [discordButtonText, setDiscordButtonText] = useState("corvid_cadaver#0000")

  useEffect(() => {
    const discordButtonJS = document.getElementById("discordButton");
    const discordCopyText = "corvid_cadaver";
    
    discordButtonJS.addEventListener('click', () => {
      navigator.clipboard.writeText(discordCopyText)
        .catch(err => {
          console.error("Failed to copy: ", err);
        })
        setDiscordButtonText("Copied!")
    })
  })



  return (
    <div>
      <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=VT323&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{__html: "\n        :root {\n            --dark-blue: #1a2634;\n            --medium-blue: #2a3846;\n            --light-blue: #3a4856;\n            --amber: #ffb300;\n            --amber-light: #ffd54f;\n        }\n\n        body {\n            margin: 0;\n            padding: 0;\n            font-family: 'Space Mono', monospace;\n            background-color: var(--dark-blue);\n            color: #ffffff;\n            line-height: 1.6;\n        }\n\n        .header {\n            background-color: var(--medium-blue);\n            padding: 2rem;\n            text-align: center;\n            border-bottom: 4px solid var(--amber);\n        }\n\n        .header h1 {\n            font-family: 'VT323', monospace;\n            font-size: 3.5rem;\n            margin: 0;\n            color: var(--amber);\n            letter-spacing: 3px;\n        }\n\n        .header p {\n            font-size: 1.2rem;\n            margin: 1rem 0 0;\n            color: #a0aec0;\n        }\n\n        .content {\n            max-width: 1200px;\n            margin: 0 auto;\n            padding: 2rem;\n        }\n\n        .price-section {\n            background-color: var(--medium-blue);\n            border-radius: 10px;\n            padding: 2rem;\n            margin-bottom: 2rem;\n            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n            border: 1px solid var(--light-blue);\n        }\n\n        .price-section h2 {\n            font-family: 'VT323', monospace;\n            font-size: 2rem;\n            color: var(--amber);\n            margin-top: 0;\n            border-bottom: 2px solid var(--amber-light);\n            padding-bottom: 0.5rem;\n        }\n\n        .price-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n            gap: 1.5rem;\n            margin-top: 1.5rem;\n        }\n\n        .price-item {\n            background-color: var(--light-blue);\n            padding: 1.5rem;\n            border-radius: 8px;\n            transition: transform 0.2s;\n        }\n\n        .price-item:hover {\n            transform: translateY(-5px);\n        }\n\n        .price-item h3 {\n            font-family: 'VT323', monospace;\n            font-size: 1.5rem;\n            color: var(--amber-light);\n            margin: 0 0 1rem 0;\n        }\n\n        .price {\n            font-size: 1.5rem;\n            font-weight: bold;\n            color: var(--amber);\n        }\n\n        .dimensions {\n            color: #a0aec0;\n            font-size: 0.9rem;\n        }\n\n        .additional-info {\n            background-color: var(--medium-blue);\n            border-radius: 10px;\n            padding: 1.5rem;\n            margin-top: 2rem;\n        }\n\n        .additional-info h3 {\n            font-family: 'VT323', monospace;\n            font-size: 1.8rem;\n            color: var(--amber);\n            margin-top: 0;\n        }\n\n        .additional-info ul {\n            list-style-type: none;\n            padding: 0;\n        }\n\n        .additional-info li {\n            margin-bottom: 0.5rem;\n            padding-left: 1.5rem;\n            position: relative;\n        }\n\n        .additional-info li::before {\n            content: \"►\";\n            color: var(--amber);\n            position: absolute;\n            left: 0;\n            font-size: 0.8em;\n        }\n\n        .image-placeholder {\n            background-color: var(--light-blue);\n            border-radius: 8px;\n            height: 200px;\n            margin: 1rem 0;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: #a0aec0;\n            border: 2px dashed var(--amber-light);\n        }\n\n        .contact-section {\n            text-align: center;\n            margin-top: 3rem;\n            padding: 2rem;\n            background-color: var(--medium-blue);\n            border-radius: 10px;\n        }\n\n        .contact-section h2 {\n            font-family: 'VT323', monospace;\n            font-size: 2rem;\n            color: var(--amber);\n        }\n\n        .game-assets {\n            text-align: center;\n            padding: 2rem;\n            background-color: var(--medium-blue);\n            border-radius: 10px;\n            margin-top: 2rem;\n        }\n\n        .game-assets h2 {\n            font-family: 'VT323', monospace;\n            font-size: 2rem;\n            color: var(--amber);\n            margin-bottom: 2rem;\n        }\n\n        .game-assets-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n            gap: 1.5rem;\n            margin: 2rem 0;\n        }\n\n        .game-asset-category {\n            text-align: center;\n        }\n\n        .game-asset-category h3 {\n            font-family: 'VT323', monospace;\n            font-size: 1.5rem;\n            color: var(--amber-light);\n            margin: 0.5rem 0;\n        }\n\n        @media (max-width: 768px) {\n            .price-grid {\n                grid-template-columns: 1fr;\n            }\n            \n            .header h1 {\n                font-size: 2.5rem;\n            }\n\n            .game-assets-grid {\n                grid-template-columns: 1fr;\n            }\n        }\n    " }} />
      
        <div className="header">
        <h1>Corvid Creative</h1>
        <p>Pixel Art Commission Pricing</p>
      </div>
      <div className="content">  
        <div className="price-section">
          <h2>Pixel Art Portraits</h2>
          <div className="dimensions">Simple but highly customizable pixel art of your character. Comes with a simple abstract background and a transparent version. Check add-ons for more options.</div>
          <div className="price-grid">
            <div className="price-item">
              <h3>Headshot</h3>
              <div className="price">$15</div>
              <div className="dimensions">1x1 square with art of your character from the shoulder up.</div>
              <div className="image-placeholder">
                <LightboxGallery images={[{ src: "./images/TinyHeadshots/folliage.jpg", title: "Character Portrait"}]} imageStyle={{maxHeight: '180px'}}/>
              </div>
            </div>
            <div className="price-item">
              <h3>Fullbody</h3>
              <div className="price">$30</div>
              <div className="dimensions">Your entire character in any pose.</div>
              <div className="image-placeholder">
              <LightboxGallery images={[{ src: "./images/MiniCharacterPortraits/Cheren.png", title: "Character Portrait"}]} imageStyle={{maxHeight: '180px'}}/>
                {/* <img src="./images/MiniCharacterPortraits/Cheren.png" style={{maxWidth: '100%', maxHeight: '100%'}} /> */}
              </div>
            </div>
          </div>
          <div className="dimensions">
            <h3>Add-Ons</h3>
            <ul>
              <li>High complexity character/background: +$10</li>
              <li>Simple animation (blinking, flicking ear/tail, etc...): +$15</li>
              <li>Additional character: +$20</li>
              <li>Nudity/Gore: +$50</li>
            </ul>
          </div>
        </div>
        <div className="price-section">
          <h2>Hi-Res Characters</h2>
          <div className="dimensions">Higher resolution art of your character in a pixel art style. Check add-ons for more options.</div>
          <div className="price-grid">
            <div className="price-item">
              <h3>Profile Picture</h3>
              <div className="price">$60</div>
              <div className="dimensions">Custom art of any character, logo, or whatever else that represents you, set in a circular frame for Social media.</div>
              <div className="image-placeholder">
                <LightboxGallery images={[{ src: "./images/PFPs/pfp.png", title: "Profile Picture"}]} imageStyle={{maxHeight: '200px'}}/>
              </div>
            </div>
            <div className="price-item">
              <h3>Character Portrait</h3>
              <div className="price">$75</div>
              <div className="dimensions">Full scale art of your entire character.</div>
              <div className="image-placeholder">
                <LightboxGallery images={[{ src: "./images/FullCharacterPortraits/image_2025-01-17_13-43-54.png", title: "Character Portrait"}]} imageStyle={{maxHeight: '190px'}}/>
              </div>
            </div>
            <div className="price-item">
              <h3>Landscape Scene</h3>
              <div className="price">$90</div>
              <div className="dimensions">Your character with a detailed background of your choosing with any aspect ratio. Great for wallpapers!</div>
              <div className="image-placeholder">
                <LightboxGallery images={[{ src: "./images/Landscapes/AtlasSnowy.png", title: "Character Portrait"}]} imageStyle={{maxWidth: '100%', maxHeight: '180px'}}/>
              </div>
            </div>
            <div className="price-item">
              <h3>Character Reference Sheet</h3>
              <div className="price">$120</div>
              <div className="dimensions">A detailed reference for your character including 3 poses (front, side, back), a color palette, custom name text, details, and up to 3 accessories. Poses can be substituted for different variations or added for the cost of an additional character. Clothing optional for all poses.</div>
              <div className="image-placeholder">
                <LightboxGallery images={[{ src: "./images/RefSheets/Bastion.jpg", title: "Character Portrait"}]} imageStyle={{maxWidth: '100%', maxHeight: '120px'}}/>
              </div>
            </div>
          </div>
          <div className="dimensions">
            <h3>Add-Ons</h3>
            <ul>
              <li>High complexity character/background: +$25</li>
              <li>Simple animation (blinking, flicking ear/tail, etc...): +$30</li>
              <li>Additional character: +$45 (price negotiable)</li>
              <li>Nudity/Gore: +$50</li>
            </ul>
          </div>
        </div>
        <div className="price-section">
          <h2>Animated Art</h2>
          <div className="dimensions">Complex pixel art animation of any kind. Consult for pricing or consider checking some of the options already available.</div>
          <div className="price-grid">
            <div className="price-item">
              <h3>Discord Banner Walk Cycle</h3>
              <div className="price">$200</div>
              <div className="dimensions">Scrolling looping parallax walk cycle in a pixel art style. Great for a custom animated banner on Discord or other social media.</div>
              <div className="image-placeholder">
                <a href="movies/WalkCycles/ScrollingBackgroundWalkCycle.gif.mp4" width="120px" rel="lightvideo">
                  <video autoPlay loop >
                    <source src="movies/WalkCycles/ScrollingBackgroundWalkCycle.gif.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </a>
              </div>
            </div>
          </div>
          <div className="dimensions">
            <ul>
              MORE SOON! (Feel free to make a request)
            </ul>
          </div>
        </div>
        <div className="game-assets">
          <h2>Game Assets</h2>
          <div className="dimensions">I am proficient in 2D Pixel art sprite work and would love to help make art for your game!</div>
          <div style={{display:"flex", flexDirection: "column", justifyContent: "center"}}>
            <a href="https://nore5515.itch.io/cerebratum-taking-initiative">Cerebratum</a>
            <a href="https://nore5515.itch.io/floodpunk">Floodpunk</a>
          </div>
        </div>
        <div className="contact-section">
          <h2>Ready to Commission?</h2>
          <p className="contact-intro">Don't see what you're looking for? Let me know! I love taking on unique projects and pushing the boundaries of pixel art.</p>
          <div className="commission-form">
            <h3>Request a Commission</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell me about your project! Include any relevant details about size, style, and complexity." required defaultValue={""} />
              </div>
              <button type="submit" className="submit-btn">Send Request</button>
            </form>
          </div>
          <div className="social-links">
            <h3>Find Me Online</h3>
            <div className="social-grid">
              <button id="discordButton" style={{padding: 0, border: "none", cursor:"pointer"}} href="#" className="social-item">
                <div style={{paddingLeft: "10px"}} className="social-icon">
                  <div style={{height: 48, width: 48}}>
                    <img src="./icons/discord.png" style={{maxWidth: '100%', maxHeight: '100%'}} />
                  </div>
                </div>
                <span>{discordButtonText}</span>
              </button>
              <a href="https://t.me/CorvidCadaver" className="social-item">
                <div className="social-icon">
                  <div style={{height: 48, width: 48}}>
                    <img src="./icons/telegram.png" style={{maxWidth: '100%', maxHeight: '100%'}} />
                  </div>
                </div>
                <span>@corvid_cadaver</span>
              </a>
              <a href="https://bsky.app/profile/afterelysium.bsky.social" className="social-item">
                <div className="social-icon">
                  <div style={{height: 48, width: 48}}>
                    <img src="./icons/bluesky.png" style={{maxWidth: '100%', maxHeight: '100%'}} />
                  </div>
                </div>
                <span>@afterelysium.bsky.social</span>
              </a>
              <a href="https://www.reddit.com/user/Bzubko/" className="social-item">
                <div className="social-icon">
                  <div style={{height: 48, width: 48}}>
                    <img src="./icons/reddit.png" style={{maxWidth: '100%', maxHeight: '100%'}} />
                  </div>
                </div>
                <span>u/Bzubko</span>
              </a>
            </div>
          </div>
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <a href="https://noah-portfolio-ddff5.web.app">
            Website created in collaboration with Noah Reed
          </a>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: "\n        .contact-section {\n            text-align: left;\n        }\n\n        .contact-section h2 {\n            text-align: center;\n            margin-bottom: 1.5rem;\n        }\n\n        .contact-section h3 {\n            font-family: 'VT323', monospace;\n            font-size: 1.5rem;\n            color: var(--amber-light);\n            margin: 2rem 0 1rem;\n        }\n\n        .contact-intro {\n            text-align: center;\n            font-size: 1.1rem;\n            margin-bottom: 2rem;\n            color: #a0aec0;\n        }\n\n        .commission-form {\n            max-width: 600px;\n            margin: 0 auto;\n            padding: 2rem;\n            background-color: var(--light-blue);\n            border-radius: 8px;\n            border: 1px solid var(--amber);\n        }\n\n        .contact-form .form-group {\n            margin-bottom: 1rem;\n        }\n\n        .contact-form input,\n        .contact-form textarea {\n            width: 100%;\n            padding: 0.8rem;\n            background-color: var(--medium-blue);\n            border: 1px solid var(--amber-light);\n            border-radius: 4px;\n            color: white;\n            font-family: 'Space Mono', monospace;\n            box-sizing: border-box;\n        }\n\n        .contact-form textarea {\n            min-height: 150px;\n            resize: vertical;\n        }\n\n        .contact-form input:focus,\n        .contact-form textarea:focus {\n            outline: none;\n            border-color: var(--amber);\n            box-shadow: 0 0 0 2px rgba(255, 179, 0, 0.2);\n        }\n\n        .submit-btn {\n            background-color: var(--amber);\n            color: var(--dark-blue);\n            font-family: 'VT323', monospace;\n            font-size: 1.2rem;\n            padding: 0.8rem 2rem;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            transition: background-color 0.2s, transform 0.2s;\n            width: 100%;\n        }\n\n        .submit-btn:hover {\n            background-color: var(--amber-light);\n            transform: translateY(-2px);\n        }\n\n        .social-links {\n            margin-top: 3rem;\n            text-align: center;\n        }\n\n        .social-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n            gap: 1.5rem;\n            margin-top: 1.5rem;\n        }\n\n        .social-item {\n            display: flex;\n            align-items: center;\n            padding: 1rem;\n            background-color: var(--light-blue);\n            border-radius: 8px;\n            text-decoration: none;\n            color: white;\n            transition: transform 0.2s, background-color 0.2s;\n        }\n\n        .social-item:hover {\n            transform: translateY(-2px);\n            background-color: var(--medium-blue);\n        }\n\n        .social-icon {\n            margin-right: 1rem;\n        }\n\n        .social-item span {\n            font-family: 'Space Mono', monospace;\n            font-size: 0.9rem;\n        }\n\n        @media (max-width: 768px) {\n            .social-grid {\n                grid-template-columns: 1fr;\n            }\n\n            .commission-form {\n                padding: 1rem;\n            }\n        }\n    " }} />
    </div>

  );
}
