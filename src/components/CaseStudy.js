import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBolt, FaMapMarkedAlt, FaLightbulb, FaBalanceScale } from "react-icons/fa";
import mockScreenshot1 from "../assets/icons/case-study/streamlit_dashboard.png";
import mockScreenshot2 from "../assets/icons/case-study/heatmap.png";
import rebalanceChart from "../assets/icons/case-study/Rebalance_Bar_Chart.png"; // Add your chart screenshot here

function CaseStudy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-gray-200 px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-32">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-white mb-4">Courier Route Case Study</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            This project explores how delivery routes could be analyzed using estimated stops, ZIP clustering, and interactive visualization. It was built using Python and Streamlit as a lightweight way to test route logic.
          </p>
        </motion.div>

        {/* Challenge */}
        <motion.section
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-4">
              <FaBolt className="text-yellow-400" /> The Challenge
            </h2>
            <p className="text-gray-400 text-lg">
              The goal was to simulate a route network and explore how delivery workload might be distributed across different areas. This involved generating basic route data and trying to surface any patterns through visualization.
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl p-3 shadow-inner mb-6 md:mb-0">
            <img src={mockScreenshot1} alt="Dashboard Overview" className="rounded w-full" />
          </div>
        </motion.section>

        {/* Approach */}
        <motion.section
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-4">
              <FaMapMarkedAlt className="text-green-400" /> The Approach
            </h2>
            <p className="text-gray-400 text-lg">
              Using Python and Pandas, I generated synthetic delivery data with ZIP codes and estimated stop counts. I grouped routes into zones, then built a Streamlit dashboard with filters and a heatmap to explore potential workload differences.
            </p>
          </div>
          <div className="bg-slate-800 rounded-xl p-3 shadow-inner mb-6 md:mb-0 order-2 md:order-1">
            <img src={mockScreenshot2} alt="Heatmap View" className="rounded w-full" />
          </div>
        </motion.section>

        {/* Rebalancing Section */}
        <motion.section
        className="grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        >
        <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-4">
            <FaBalanceScale className="text-pink-400" /> Route Rebalancing
            </h2>
            <p className="text-gray-400 text-lg mb-4">
            After identifying overloaded routes, I explored how stops could be more evenly spread among ZIPs within each route.
            This helped visualize how rebalancing might reduce spikes and improve overall balance.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
            <p><strong>Standard Deviation Before:</strong> 0.94</p>
            <p><strong>Standard Deviation After:</strong> 0.47</p>
            </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-3 shadow-inner">
            <img
            src={rebalanceChart}
            alt="Before vs After Rebalancing"
            className="rounded w-full"
            />
        </div>
        </motion.section>

        {/* Learnings */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-white flex items-center gap-3">
            <FaLightbulb className="text-indigo-400" /> Key Takeaways
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-5 rounded-lg shadow-md text-center text-gray-200">
              Simulation using small dataset with ZIP based zones
            </div>
            <div className="bg-slate-800 p-5 rounded-lg shadow-md text-center text-gray-200">
              Practiced working with geospatial ZIP code data
            </div>
            <div className="bg-slate-800 p-5 rounded-lg shadow-md text-center text-gray-200">
              Built a dashboard with Streamlit and PyDeck for quick exploration
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a
            href="https://htrillo95-case-study-app-49c0n3.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Launch Live Dashboard
          </a>

          <div className="text-sm text-gray-400 space-x-3">
            <a
              href="https://github.com/htrillo95/case-study/blob/main/app.py"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              View Script
            </a>
            <span>•</span>
            <Link
              to="/"
              className="underline hover:text-white"
            >
              Return to Portfolio
            </Link>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default CaseStudy;
