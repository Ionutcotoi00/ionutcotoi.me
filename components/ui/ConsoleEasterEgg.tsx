"use client";

import { useEffect } from "react";

export default function ConsoleEasterEgg() {
  useEffect(() => {
    const styles = [
      "color: #3b82f6",
      "font-size: 16px",
      "font-weight: bold",
      "text-shadow: 2px 2px 4px rgba(0,0,0,0.3)",
    ].join(";");

    const styles2 = [
      "color: #10b981",
      "font-size: 14px",
      "font-weight: normal",
    ].join(";");

    const styles3 = [
      "color: #a1a1aa",
      "font-size: 12px",
      "font-style: italic",
    ].join(";");

    // ASCII Art
    console.log(
      "%c" +
        `
╔═══════════════════════════════════════════════════════╗
║                                                       ║
║   👋 Hey there! You found the console!               ║
║                                                       ║
║   I'm Ionuț, a .NET Full-Stack Developer            ║
║   who loves building high-performance systems.         ║
║                                                       ║
╚═══════════════════════════════════════════════════════╝
    `,
      styles
    );

    console.log(
      "%c💡 Fun Facts:",
      styles2
    );
    console.log(
      "%c• I once optimized a stored procedure from 4s to 300ms (90% faster!)",
      styles3
    );
    console.log(
      "%c• Saved a client $25k/year by fixing async delivery failures",
      styles3
    );
    console.log(
      "%c• Built a healthcare SaaS platform serving 10,000+ users",
      styles3
    );
    console.log(
      "%c• Founder of DiverseWork - AI-powered inclusive recruitment platform",
      styles3
    );

    console.log(
      "%c\n🚀 Want to work together?",
      styles2
    );
    console.log(
      "%c📧 Email: ionutcotoi@diversework.org",
      styles3
    );
    console.log(
      "%c💼 LinkedIn: linkedin.com/in/ionutiacobcotoi",
      styles3
    );
    console.log(
      "%c🐙 GitHub: github.com/Ionutcotoi00",
      styles3
    );

    console.log(
      "%c\n💻 Tech Stack:",
      styles2
    );
    console.log(
      "%cBackend: .NET 8, ASP.NET Core, SQL Server, Azure",
      styles3
    );
    console.log(
      "%cFrontend: React 18, Next.js, TypeScript, Tailwind CSS",
      styles3
    );
    console.log(
      "%cCloud: Azure App Service, Azure OpenAI, Docker, CI/CD",
      styles3
    );

    console.log(
      "%c\n🎯 Looking for:",
      styles2
    );
    console.log(
      "%c• B2B contracts starting 2026",
      styles3
    );
    console.log(
      "%c• Remote opportunities",
      styles3
    );
    console.log(
      "%c• Challenging .NET/Azure projects",
      styles3
    );

    // Konami code easter egg
    let konamiCode = "";
    const konamiSequence = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];

    const handleKeyDown = (e: KeyboardEvent) => {
      konamiCode += e.code;
      if (konamiCode.length > konamiSequence.length * 2) {
        konamiCode = konamiCode.slice(-konamiSequence.length * 2);
      }

      if (konamiCode.includes(konamiSequence.join(""))) {
        console.log(
          "%c\n🎉 KONAMI CODE ACTIVATED!",
          "color: #fbbf24; font-size: 20px; font-weight: bold;"
        );
        console.log(
          "%cYou're clearly a developer who pays attention to details!",
          "color: #10b981; font-size: 14px;"
        );
        console.log(
          "%cThat's exactly the kind of attention to detail I bring to code. 🚀",
          "color: #a1a1aa; font-size: 12px;"
        );
        konamiCode = "";
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Easter egg: Check if they're a recruiter
    const checkRecruiter = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const recruiterKeywords = [
        "linkedin",
        "greenhouse",
        "lever",
        "workday",
        "taleo",
        "smartrecruiters",
      ];

      if (recruiterKeywords.some((keyword) => userAgent.includes(keyword))) {
        console.log(
          "%c\n👔 Hey Recruiter!",
          "color: #3b82f6; font-size: 16px; font-weight: bold;"
        );
        console.log(
          "%cThanks for checking out my portfolio!",
          "color: #10b981; font-size: 14px;"
        );
        console.log(
          "%cQuick highlights:\n• 4+ years .NET experience\n• Healthcare SaaS expertise\n• Performance optimization specialist\n• Microsoft for Startups partner\n• Available for B2B contracts",
          "color: #a1a1aa; font-size: 12px; line-height: 1.6;"
        );
      }
    };

    checkRecruiter();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}


