import React, { useState, useEffect } from "react";


const API = {
    portfolioData: [{
        title: "Work Day Scheduler",
        image: "../../assets/images/wdscheduler_screenshot.jpg",
        gitRepo: "https://github.com/dassoumik/work-day-scheduler/",
        link: "https://dassoumik.github.io/work-day-scheduler/",
        link1name: "Git Repo Link",
        link2name: "App Link"
    },{
    title: "City 411",
    image: "../../assets/images/city411_screenshot.jpg",
    gitRepo: "https://github.com/dassoumik/city411/",
    link: "https://dassoumik.github.io/city411/",
    link1name: "Git Repo Link",
    link2name: "App Link"
    },{
    title: "Puppy Play",
    image: "../../assets/images/puppyplay_screenshot.jpg",
    gitRepo: "https://github.com/dassoumik/project-2/",
    link: "https://app-puppy-play.herokuapp.com/",
    link1name: "Git Repo Link",
    link2name: "App Link"
    },{
    title: "Code Quiz",
    image: "../../assets/images/codequiz_screenshot.jpg",
    gitRepo: "https://github.com/dassoumik/code-quiz/",
    link: "https://dassoumik.github.io/code-quiz/",
    link1name: "Git Repo Link",
    link2name: "App Link"
    },{
    title: "Budget Tracker",
    image: "../../assets/images/bt_screenshot.jpg",
    gitRepo: "https://github.com/dassoumik/on-off-budget-tracker",
    link: "https://sd-budget-tracker.herokuapp.com/",
    link1name: "Git Repo Link",
    link2name: "App Link"
    },{
    title: "Note Taker",
    image: "../../assets/images/nt_screenshot.jpg",
    gitRepo: "https://github.com/dassoumik/note-taker",
    link: "https://secret-plateau-96475.herokuapp.com/",
    link1name: "Git Repo Link",
    link2name: "App Link"
    }],
    blogsData: [{
        title: "Wired",
        image: "../../assets/images/wired_blog.jpg",
        gitRepo: "",
        link: "https://www.wired.com/",        
        link1name: "",
        link2name: "Blog Link"
    }, {
        title: "Mashable",
        image: "../../assets/images/mashable_blog.jpg",
        gitRepo: "",
        link: "https://www.mashable.com/",
        link1name: "",
        link2name: "Blog Link"
    }, {
        title: "Dev.to",
        image: "../../assets/images/devto_blog.jpg",
        gitRepo: "",
        link: "https://dev.to/",
        link1name: "",
        link2name: "Blog Link"
    }, {
        title: "Hakernoon",
        image: "../../assets/images/hackernoon_blog.jpg",
        gitRepo: "",
        link: "https://hackernoon.com/",
        link1name: "",
        link2name: "Blog Link"
    }, {
        title: "martinFlower.com",
        image: "../../assets/images/martinflower_blog.jpg",
        gitRepo: "",
        link: "https://martinfowler.com/",
        link1name: "",
        link2name: "Blog Link"
    }, {
        title: "Fingent",
        image: "../../assets/images/fingent_blog.jpg",
        gitRepo: "",
        link: "https://www.fingent.com/blog/",
        link1name: "",
        link2name: "Blog Link"
    }],
    contactData: [{
        title: "Github",
        image: "../../assets/images/github.jpg",
        gitRepo: "",
        link: "https://github.com/dassoumik",
        link1name: "",
        link2name: "https://github.com/dassoumik"
    }, {
        title: "LinkedIn",
        image: "../../assets/images/linkedin.jpg",
        gitRepo: "",
        link: "https://www.linkedin.com/in/sd002",
        link1name: "",
        link2name: "https://www.linkedin.com/in/sd"
    }, {
        title: "Phone",
        image: "../../assets/images/phone.jpg",
        gitRepo: "",
        link: "tel: 904-414-6550",
        link1name: "",
        link2name: "+ 1 904-414-6550"
    }, {
    title: "Email",
        image: "../../assets/images/email.jpg",
        gitRepo: "",
        link: "mailto:contact.soumikdas@gmail.com",
        link1name: "",
        link2name: "contact.soumikdas@gmail.com"
    }, {
    title: "Resume",
        image: "../../assets/images/resume.jpg",
        gitRepo: "",
        link: "https://dassoumik.github.io/resume/",
        link1name: "",
        link2name: "https://dassoumik.github.io/resume/"
    }, {
        title: "Twitter",
        image: "../../assets/images/twitter.jpg",
        gitRepo: "",
        link: "https://twitter.com/twit_soumik",
        link1name: "",
        link2name: "@twit_soumik"
    }]
}

export default API;