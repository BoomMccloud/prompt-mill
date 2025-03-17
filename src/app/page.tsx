import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Search,
  Code,
  MessageSquare,
  FileText,
  Database,
  ThumbsUp,
  Filter,
  BookOpen,
  Users,
  ChevronRight,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full max-w-[2000px] mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Prompt Mill</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#use-cases" className="text-sm font-medium hover:text-primary">
              Use Cases
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How It Works
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="hidden md:flex">
              Log In
            </Button>
            <Button size="sm">Get Started Free</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-muted">
          <div className="w-full max-w-[2000px] mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mb-6">
              High-Performing LLM Prompts for Every Use Case
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
              Curated, categorized, and community-voted for optimal performance on large and context-limited models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="px-8">
                Get Started Free
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Prompts
              </Button>
            </div>
            <div className="relative w-full max-w-4xl rounded-lg border bg-background shadow-lg overflow-hidden">
              <div className="flex items-center justify-between border-b p-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-muted-foreground">prompt-mill.app</div>
                <div></div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary font-mono text-sm">
                  <span>{">"}</span>
                  <span className="animate-pulse">|</span>
                </div>
                <div className="space-y-2">
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <p className="font-semibold">Content Creation Prompt (GPT-4)</p>
                    <p className="text-muted-foreground mt-1">
                      You are a skilled content writer. Create a compelling blog post about [TOPIC] that includes: 1) An
                      attention-grabbing headline, 2) 5 key points with supporting evidence, 3) A strong call-to-action.
                      Use a conversational tone and include relevant statistics.
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <ThumbsUp className="h-4 w-4 text-green-500" />
                      <span className="text-xs text-muted-foreground">98% success rate on 1,245 votes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-20 bg-background">
          <div className="w-full max-w-[2000px] mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg md:text-xl">
                Are you tired of spending hours crafting and testing prompts for your LLM, only to get mediocre results?
                Developing effective prompts can be time-consuming and frustrating, especially when you're working with
                different model sizes and diverse applications.
              </p>
              <p className="text-lg md:text-xl">
                <span className="font-bold">Prompt Mill solves this problem</span> by providing a centralized library of
                high-performing prompts, meticulously categorized by use case and optimized for both large language
                models (with ample context) and smaller, resource-constrained models. We understand that a prompt that
                works brilliantly on GPT-4 might fail miserably on a smaller model, and vice versa. That's why we've
                built a system that caters to the specific needs of your project.
              </p>
              <p className="text-lg md:text-xl">
                Our library features a wide range of prompts across numerous industries and applications, from content
                creation and customer service to code generation and data analysis. Each prompt is not only carefully
                curated but also subjected to rigorous community voting. This ensures that the prompts you find on
                Prompt Mill are not just theoretically sound, but proven to deliver exceptional results in real-world
                scenarios.
              </p>
              <p className="text-lg md:text-xl font-bold">
                Stop wasting time on trial and error. Join Prompt Mill and access a constantly growing collection of
                prompts that will help you unlock the full potential of your LLM, regardless of its size or your
                specific application.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted">
          <div className="w-full max-w-[2000px] mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Easy Search & Filtering</h3>
                <p className="text-muted-foreground">
                  Quickly find the perfect prompt for your needs with our intuitive search and comprehensive filtering
                  system.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Voting</h3>
                <p className="text-muted-foreground">
                  Ensuring only the best prompts rise to the top through our transparent community voting system.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Filter className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Model Size Optimization</h3>
                <p className="text-muted-foreground">
                  Prompts tailored for different LLM sizes, from resource-intensive GPT-4 to smaller, context-limited
                  models.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Growing Library</h3>
                <p className="text-muted-foreground">
                  Access a constantly expanding collection of prompts with new additions regularly curated and added.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Contribute & Collaborate</h3>
                <p className="text-muted-foreground">
                  Share your own high-performing prompts and collaborate with others to refine and improve them.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Version History</h3>
                <p className="text-muted-foreground">
                  Track prompt evolution with comprehensive version history to understand what makes prompts effective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-20 bg-background">
          <div className="w-full max-w-[2000px] mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Diverse Use Cases</h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Our prompt library covers a wide range of industries and applications, ensuring you'll find the perfect
              prompt for your specific needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Use Case 1 */}
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-primary/5 p-6">
                  <MessageSquare className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Content Creation</h3>
                  <p className="text-muted-foreground">
                    Blog posts, social media content, marketing copy, product descriptions, and more.
                  </p>
                </div>
                <div className="p-6 bg-background">
                  <div className="text-sm bg-muted p-3 rounded-md font-mono">
                    You are a skilled content writer. Create a compelling blog post about [TOPIC] that includes...
                  </div>
                </div>
              </div>

              {/* Use Case 2 */}
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-primary/5 p-6">
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Code Generation</h3>
                  <p className="text-muted-foreground">
                    Function implementation, code refactoring, debugging assistance, and documentation.
                  </p>
                </div>
                <div className="p-6 bg-background">
                  <div className="text-sm bg-muted p-3 rounded-md font-mono">
                    You are an expert software engineer. Implement a function that [FUNCTION_DESCRIPTION] with...
                  </div>
                </div>
              </div>

              {/* Use Case 3 */}
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-primary/5 p-6">
                  <FileText className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
                  <p className="text-muted-foreground">
                    Data interpretation, trend identification, report generation, and statistical analysis.
                  </p>
                </div>
                <div className="p-6 bg-background">
                  <div className="text-sm bg-muted p-3 rounded-md font-mono">
                    You are a data analyst. Analyze the following dataset and provide insights on [ANALYSIS_GOAL]...
                  </div>
                </div>
              </div>

              {/* Use Case 4 */}
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="bg-primary/5 p-6">
                  <MessageSquare className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Customer Service</h3>
                  <p className="text-muted-foreground">
                    Response templates, troubleshooting guides, FAQ generation, and support automation.
                  </p>
                </div>
                <div className="p-6 bg-background">
                  <div className="text-sm bg-muted p-3 rounded-md font-mono">
                    You are a helpful customer support agent. Respond to the following customer inquiry about
                    [PRODUCT]...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-muted">
          <div className="w-full max-w-[2000px] mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Our community-driven approach ensures you get access to the most effective prompts for your specific
              needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-background rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Find Your Prompt</h3>
                <p className="text-muted-foreground">
                  Search our extensive library of prompts using filters for industry, model size, use case, and more to
                  find the perfect match for your needs.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-background rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Use & Customize</h3>
                <p className="text-muted-foreground">
                  Copy the prompt directly into your LLM application or customize it to better fit your specific
                  requirements before using it.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-background rounded-lg p-6 relative">
                <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4 mt-4">Vote & Contribute</h3>
                <p className="text-muted-foreground">
                  Vote on prompts based on their effectiveness and contribute your own successful prompts to help the
                  community grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="w-full max-w-[2000px] mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock the Full Potential of Your LLM?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              Join Prompt Mill today and access our growing library of high-performing prompts for every use case and
              model size.
            </p>
            <Button size="lg" variant="secondary" className="px-8">
              Get Started Free
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12 bg-background">
        <div className="w-full max-w-[2000px] mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Prompt Mill</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prompt Mill. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

