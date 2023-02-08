import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Arrows from '@/components/arrows'
import Header from '@/components/header'
import ImageCarousel from '@/components/carousel/index'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function About() {

    return (
        <>
            <Head>
            <title>About Us</title>
            <meta name="author" content="MDIA 2109" />
            <meta property="og:title" content="Assignment #1 - About Us Page" />
            <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />
            </Head>
            <main className={styles.main}>
            <Header />
            <div>
                <h1>About Us</h1>
                <p>We are proud to deliver an aducation that goes beyond textbooks and classrooms.</p>
                <p>Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
                <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p>
                <h2>Information Sessions</h2>
                <p>Information sessions are a simple way to figure out the next step along your career path.<br />Learn more about the programs that interest you.</p>
                <h3>Big Info</h3>
                <p>Big info is the largest program expo and information session at BCIT. It's your chance to find out about all our programs - from business, computing, and health to engineering, trades, and applied sciences.</p>
                <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.</p>
                <h2>Campus Tours</h2>
                <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
                <ImageCarousel />
                <h1>Departments</h1>
                <ul>
                    <li>Applied & Natural Sciences</li>
                    <li>Business & Media</li>
                    <li>Computing & IT</li>
                    <li>Engineerin</li>
                    <li>Health Sciences</li>
                    <li>Trades & Apprenticeships</li>
                </ul>
            </div>
            <Arrows />
            </main>
        </>
    )
}
