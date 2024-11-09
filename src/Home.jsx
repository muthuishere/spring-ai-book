// Home.jsx
import { Link } from "react-router-dom";
import bookCover from "./assets/book-cover.png"; // You'll need to add your book cover
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  BookOpen,
  Server,
  Brain,
  Database,
  FileCode,
  Image,
  Cloud,
  Bot,
} from "lucide-react";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center space-y-6 dark:text-gray-300">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold text-primary dark:text-gray-100 mb-4">
              Spring AI for Your Organization
            </h1>
            <h2 className="text-2xl text-muted-foreground mb-4">
              GCP Vertex AI Edition
            </h2>
            <p className="text-xl mb-6">
              By{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/muthuishere/"
              >
                Muthukumaran Navaneethakrishnan
              </a>
            </p>
            <div className="space-y-4">
              <p className="text-lg">
                Master Spring AI development with GCP Vertex AI through 20+
                practical examples covering RAG, Text Embeddings, Image
                Embeddings, and more
              </p>
              <a
                href="http://leanpub.com/springai"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get the Book on Leanpub
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={bookCover}
              alt="Book Cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="dark:text-gray-300 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          What You'll Learn
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Bot,
              title: "ChatBot Development",
              description:
                "Build context-aware chatbots with memory management and conversational continuity",
            },
            {
              icon: Database,
              title: "Structural Data Integration",
              description:
                "Create AI-powered interfaces for SQL databases with natural language processing",
            },
            {
              icon: Code,
              title: "LLM Function Calling",
              description:
                "Implement advanced LLM function calls for complex system integration",
            },
            {
              icon: FileCode,
              title: "Document Processing",
              description:
                "Handle text, PDF, and multimedia content in your AI applications",
            },
            {
              icon: Brain,
              title: "RAG Implementation",
              description:
                "Enhance LLMs with Retrieval-Augmented Generation using internal data",
            },
            {
              icon: Cloud,
              title: "GCP Integration",
              description:
                "Deploy and scale your AI applications on Google Cloud Platform",
            },
          ].map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <feature.icon className="h-6 w-6 text-primary" />
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Chapter Overview */}
      <section className="dark:text-gray-300 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Comprehensive Coverage
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              number: "1 - 2",
              title: "Foundation & Basic ChatBot",
              description:
                "Get started with Spring AI and build your first AI-powered chatbot",
            },
            {
              number: "3 - 5",
              title: "Advanced ChatBot Features",
              description:
                "Implement context awareness, structural data integration, and LLM function calling",
            },
            {
              number: "6 - 7",
              title: "Multimedia Processing",
              description:
                "Handle text, PDF, images, audio, and video in your AI applications",
            },
            {
              number: "8 - 10",
              title: "Enterprise Integration",
              description:
                "Implement RAG, knowledge base integration, and document processing",
            },
            {
              number: "11 - 12",
              title: "Advanced Topics",
              description:
                "Explore GCP Model Garden and future directions in Spring AI",
            },
          ].map((chapter, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-full p-2 w-20 h-12 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {chapter.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{chapter.title}</h3>
                  <p className="text-muted-foreground mt-2">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-primary/5 rounded-lg p-12 mt-12">
        <h2 className="text-3xl font-bold mb-6">Ready to Master Spring AI?</h2>
        <p className="text-xl mb-8">
          Get practical, hands-on experience with 20+ practical examples
        </p>
        <div className="space-x-4">
          <a
            href="http://leanpub.com/springai"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purchase on Leanpub
          </a>
          <Link
            href="http://leanpub.com/springai"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-300"
          >
            Read Sample Chapter
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
