import React from "react";
import "./style.css";
import { FaGithub, FaFacebookF, FaLinkedin, FaMedium } from "react-icons/fa";
import { socialAccounts } from "../../content_option";

export const SocialMediaIcons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialAccounts.twitter && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialAccounts.medium}>
              <FaMedium />
            </a>
          </li>
        )}
        {socialAccounts.github && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialAccounts.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialAccounts.facebook && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialAccounts.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialAccounts.linkedin && (
          <li>
            <a target="_blank" rel="noreferrer" href={socialAccounts.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
