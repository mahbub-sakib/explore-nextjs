import Link from 'next/link';
import React from 'react';

const blogsPage = () => {
    return (
        <div className="p-24">
            {
                blogs.map((blog) => (
                    <div key={blog.slug} className="border-2 p-12">
                        <h3>{blog.title}</h3>
                        <h3>{blog.description}</h3>
                        <button className="bg-red-400 p-3">
                            <Link href={`/blogs/${blog.slug}`}>View Detail</Link>
                        </button>
                    </div>
                ))
            }
        </div>
    );
};

const blogs = [
    {
        "slug": "intro-to-react",
        "title": "Introduction to React",
        "description": "A beginner's guide to building dynamic user interfaces with React."
    },
    {
        "slug": "mongodb-basics",
        "title": "Understanding MongoDB",
        "description": "Learn the basics of MongoDB and how to integrate it into your web applications."
    },
    {
        "slug": "open-source-guide",
        "title": "Contributing to Open Source",
        "description": "Step-by-step guide on how to contribute to open-source projects on GitHub."
    },
    {
        "slug": "modern-js-features",
        "title": "Modern JavaScript Features",
        "description": "Explore the latest JavaScript features that simplify development."
    },
    {
        "slug": "css-grid-tutorial",
        "title": "Mastering CSS Grid",
        "description": "A comprehensive tutorial on how to create responsive layouts with CSS Grid."
    }
]

export default blogsPage;