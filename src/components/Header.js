import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const intLinks = [
  {
    text: "Projects",
    url: "#projects"
  },
  {
    text: "Contact Me",
    url: "#contactme"
  }
]

const SocialList = () => {
  const socialList = socials.map(item => {
    return (
      <span className="social-list" key={item.url}>
        <a href={item.url}><FontAwesomeIcon icon={item.icon} size="2x" /></a>  
      </span>
    )
  })

  return <>{socialList}</>
}

const Header = () => {

  /** 
  * This component illustrates the use of both the useRef hook and useEffect hook. 
  * The useRef hook is used to create a reference to a DOM element, in order to tweak the header styles and run a transition animation. 
  * The useEffect hook is used to perform a subscription when the component is mounted and to unsubscribe when the component is unmounted. 
  * Additionally, it showcases a neat implementation to smoothly navigate to different sections of the page when clicking on the header elements. 
  */ 
  const headerRef = useRef(null); 
 
  useEffect(() => { 
    let prevScrollPos = window.scrollY; 
  
    const handleScroll = () => { 
      const currentScrollPos = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevScrollPos > currentScrollPos) { 
        headerElement.style.transform = "translateY(0)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevScrollPos = currentScrollPos; 
    } 
    window.addEventListener('scroll', handleScroll) 
  
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 

  const handleClick = (anchor) => {
    anchor.preventDefault()
    const id = `${anchor.target.getAttribute("href")}-section`;
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="sticky"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <SocialList></SocialList>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              {
                intLinks.map(link => {
                  return <a href={link.url} onClick={handleClick} key={link.text}>{link.text}</a>
                })
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
