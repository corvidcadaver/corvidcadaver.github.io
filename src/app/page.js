'use client'

import Image from "next/image";
import styles from "./page.module.css";
import LightboxGallery from "../../public/components/LightboxGallery";
import { useEffect } from "react";
import { useState } from "react";
import '../../public/css/styles.css';

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
        setDiscordButtonText("Copied username!")
    })
  })


  return (
    <div>
      <script src="//code.jquery.com/jquery-3.2.1.min.js"></script>
      <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=VT323&display=swap" rel="stylesheet" />
      <div className="header">
        <h1>Corvid Creative</h1>
        <p>Pixel Art Commission Pricing</p>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <img src="movies/UnderConstruction.gif">
        </img>
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
          {/* <div className="commission-form">
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
          </div> */}
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
                <span>@afterelysium</span>
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
            Website made in collaboration with Noah Reed
          </a>
        </div>
      </div>
    </div>

  );
}
