import React, { useEffect, useState } from "react";

import "./img/svg/Logo.svg"
import './css/style.min.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts';

const data = [
    { name: 'Tháng 1', DoanhThu: 400, ChiPhi: 240 },
    { name: 'Tháng 2', DoanhThu: 300, ChiPhi: 139 },
    { name: 'Tháng 3', DoanhThu: 500, ChiPhi: 980 },
    { name: 'Tháng 4', DoanhThu: 200, ChiPhi: 390 },
    { name: 'Tháng 5', DoanhThu: 600, ChiPhi: 300 },
];
export default function Dashboard() {
    useEffect(() => {
        // Gọi sau khi script đã load trong index.html
        if (window.feather) {
            window.feather.replace();
        }
    }, []);


    const [showDoanhThu, setShowDoanhThu] = useState(true);

    const handleToggleA = () => {
        setShowDoanhThu((prev) => !prev);
    };

    const handleButtonB = () => {
        alert('Bạn vừa bấm nút B');
    };



    return (
        <>
            <div class="layer"></div>
            <a class="skip-link sr-only" href="#">Skip to content</a>
            <div class="page-flex">
                <aside class="sidebar">
                    <div class="sidebar-start">
                        <div class="sidebar-head">
                            <a href="/" class="logo-wrapper" title="Home">
                                <span class="sr-only">Home</span>
                                <span class="icon logo" aria-hidden="true"></span>
                                <div class="logo-text">
                                    <span class="logo-title">Elegant</span>
                                    <span class="logo-subtitle">Dashboard</span>
                                </div>

                            </a>
                        </div>
                        <div class="sidebar-body">
                            <ul class="sidebar-body-menu">
                                <li>
                                    <a class="active" href="/"><span class="icon home" aria-hidden="true"></span>Dashboard</a>
                                </li>
                                <li>
                                    <a class="show-cat-btn" href="##">
                                        <span class="icon document" aria-hidden="true"></span>Posts
                                        <span class="category__btn transparent-btn" title="Open list">
                                            <span class="sr-only">Open list</span>
                                            <span class="icon arrow-down" aria-hidden="true"></span>
                                        </span>
                                    </a>
                                    <ul class="cat-sub-menu">
                                        <li>
                                            <a href="posts.html">All Posts</a>
                                        </li>
                                        <li>
                                            <a href="new-post.html">Add new post</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <ul class="cat-sub-menu">
                                        <li>
                                            <a href="categories.html">All categories</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="show-cat-btn" href="##">
                                        <span class="icon image" aria-hidden="true"></span>Media
                                        <span class="category__btn transparent-btn" title="Open list">
                                            <span class="sr-only">Open list</span>
                                            <span class="icon arrow-down" aria-hidden="true"></span>
                                        </span>
                                    </a>
                                    <ul class="cat-sub-menu">
                                        <li>
                                            <a href="media-01.html">Media-01</a>
                                        </li>
                                        <li>
                                            <a href="media-02.html">Media-02</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="show-cat-btn" href="##">
                                        <span class="icon paper" aria-hidden="true"></span>Pages
                                        <span class="category__btn transparent-btn" title="Open list">
                                            <span class="sr-only">Open list</span>
                                            <span class="icon arrow-down" aria-hidden="true"></span>
                                        </span>
                                    </a>
                                    <ul class="cat-sub-menu">
                                        <li>
                                            <a href="pages.html">All pages</a>
                                        </li>
                                        <li>
                                            <a href="new-page.html">Add new page</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="comments.html">
                                        <span class="icon message" aria-hidden="true"></span>
                                        Comments
                                    </a>
                                </li>
                            </ul>
                            <span class="system-menu__title">system</span>
                            <ul class="sidebar-body-menu">
                                <li>
                                    <a href="appearance.html"><span class="icon edit" aria-hidden="true"></span>Appearance</a>
                                </li>
                                <li>
                                    <a class="show-cat-btn" href="##">
                                        <span class="icon category" aria-hidden="true"></span>Extentions
                                        <span class="category__btn transparent-btn" title="Open list">
                                            <span class="sr-only">Open list</span>
                                            <span class="icon arrow-down" aria-hidden="true"></span>
                                        </span>
                                    </a>
                                    <ul class="cat-sub-menu">
                                        <li>
                                            <a href="extention-01.html">Extentions-01</a>
                                        </li>
                                        <li>
                                            <a href="extention-02.html">Extentions-02</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a class="show-cat-btn" href="##">
                                        <span class="icon user-3" aria-hidden="true"></span>Users
                                        <span class="category__btn transparent-btn" title="Open list">
                                            <span class="sr-only">Open list</span>
                                            <span class="icon arrow-down" aria-hidden="true"></span>
                                        </span>
                                    </a>
                                    <ul class="cat-sub-menu">
                                        <li>
                                            <a href="users-01.html">Users-01</a>
                                        </li>
                                        <li>
                                            <a href="users-02.html">Users-02</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="##"><span class="icon setting" aria-hidden="true"></span>Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <div class="main-wrapper">
                    <nav class="main-nav--bg">
                        <div class="container main-nav">
                            <div class="main-nav-start">
                                <div class="search-wrapper">
                                    <h2>Dashboard</h2>
                                </div>
                            </div>
                            <div class="main-nav-end">

                                <div class="notification-wrapper">

                                    <ul class="users-item-dropdown notification-dropdown dropdown">
                                        <li>
                                            <a href="##">
                                                <div class="notification-dropdown-icon info">
                                                    <i data-feather="check"></i>
                                                </div>
                                                <div class="notification-dropdown-text">
                                                    <span class="notification-dropdown__title">System just updated</span>
                                                    <span class="notification-dropdown__subtitle">The system has been successfully upgraded. Read more
                                                        here.</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="##">
                                                <div class="notification-dropdown-icon danger">
                                                    <i data-feather="info" aria-hidden="true"></i>
                                                </div>
                                                <div class="notification-dropdown-text">
                                                    <span class="notification-dropdown__title">The cache is full!</span>
                                                    <span class="notification-dropdown__subtitle">Unnecessary caches take up a lot of memory space and
                                                        interfere ...</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="##">
                                                <div class="notification-dropdown-icon info">
                                                    <i data-feather="check" aria-hidden="true"></i>
                                                </div>
                                                <div class="notification-dropdown-text">
                                                    <span class="notification-dropdown__title">New Subscriber here!</span>
                                                    <span class="notification-dropdown__subtitle">A new subscriber has subscribed.</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="link-to-page" href="##">Go to Notifications page</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nav-user-wrapper">
                                    <button href="##" class="nav-user-btn dropdown-btn" title="My profile" type="button">
                                        <span class="sr-only">My profile</span>
                                        <span class="nav-user-img">
                                            <picture>
                                                <source srcset="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" type="image/webp" /><img
                                                    src={"https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg"} alt="User name" />
                                            </picture>
                                        </span>
                                    </button>
                                    <button href="##" class="nav-user-btn dropdown-btn" title="My profile" type="button">
                                        <span class="sr-only">My profile</span>
                                        <span class="nav-user-img">
                                            <picture>
                                                <source srcset="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" type="image/webp" /><img
                                                    src={"https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg"} alt="User name" />
                                            </picture>
                                        </span>
                                    </button>
                                    <button href="##" class="nav-user-btn dropdown-btn" title="My profile" type="button">
                                        <span class="sr-only">My profile</span>
                                        <span class="nav-user-img">
                                            <picture>
                                                <source srcset="https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg" type="image/webp" /><img
                                                    src={"https://i.pinimg.com/736x/3f/3c/9a/3f3c9a765bdeb8b74d1fe6c5084f6b34.jpg"} alt="User name" />
                                            </picture>
                                        </span>
                                    </button>
                                    <ul class="users-item-dropdown nav-user-dropdown dropdown">
                                        <li><a href="##">
                                            <i data-feather="user" aria-hidden="true"></i>
                                            <span>Profile</span>
                                        </a></li>
                                        <li><a href="##">
                                            <i data-feather="settings" aria-hidden="true"></i>
                                            <span>Account settings</span>
                                        </a></li>
                                        <li><a class="danger" href="##">
                                            <i data-feather="log-out" aria-hidden="true"></i>
                                            <span>Log out</span>
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <main style={{ marginTop: "-20px", height: "700px" }} class="main users chart-page" id="skip-target">
                        <div style={{ marginTop: "-40px" }} class="container">

                            <div class="row">
                                <LineChart
                                    width={1000}
                                    height={400}
                                    data={data}
                                    margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    {showDoanhThu && (
                                        <Line
                                            type="monotone"
                                            dataKey="DoanhThu"
                                            stroke="#8884d8"
                                            strokeWidth={5}
                                        />
                                    )}
                                    <Line strokeWidth={5} type="monotone" dataKey="ChiPhi" stroke="#82ca9d" />
                                </LineChart>
                                <div style={{ marginBottom: '10px' }}>
                                    <button onClick={handleToggleA}>Nút A (Ẩn/Hiện DoanhThu)</button>
                                    <button onClick={handleButtonB} style={{ marginLeft: '10px' }}>
                                        Nút B
                                    </button>
                                </div>
                            </div>

                        </div>
                    </main>
                    <footer class="footer">
                        <div class="container footer--flex">
                            <div class="footer-start">
                                <p>2021 © Elegant Dashboard - <a href="elegant-dashboard.com" target="_blank"
                                    rel="noopener noreferrer">elegant-dashboard.com</a></p>
                            </div>
                            <ul class="footer-end">
                                <li><a href="##">About</a></li>
                                <li><a href="##">Support</a></li>
                                <li><a href="##">Puchase</a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
