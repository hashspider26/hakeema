import { HeartPulse, Target, Award, Users, Flower2, Heart, TrendingUp, Shield } from "lucide-react";
import Image from "next/image";

export const dynamic = 'force-dynamic';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-950">
            {/* Hero Section */}
            <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
                <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                                <HeartPulse className="h-4 w-4 text-primary" />
                                <span className="text-sm font-semibold text-primary">Since 2018</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                Pure Healing, Rooted in Nature
                            </h1>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                At EDawakhana.pk, we're dedicated to bringing the ancient wisdom of herbal medicine to the modern world, providing pure, effective, and natural remedies for a healthier lifestyle.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg">
                                <Image
                                    src="/uploads/vimg.jpg"
                                    alt="EDawakhana.pk - Natural Healing"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <Target className="h-7 w-7 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Our Mission</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                To provide authentic herbal medicines and natural wellness products that are accessible, affordable, and safe for every household in Pakistan, fostering a culture of natural healing.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <Award className="h-7 w-7 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Our Vision</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                To become the most trusted digital dawakhana in Pakistan, leading the way in integrating traditional herbal wisdom with modern quality standards for the benefit of all.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="bg-white dark:bg-black border-y border-zinc-200 dark:border-zinc-800 py-20 px-4">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                            Our Story
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Resurrecting Traditional Wisdom for Modern Wellness
                        </p>
                    </div>

                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                            EDawakhana.pk started with a vision to preserve and promote the rich heritage of herbal medicine in Pakistan. We recognized the growing need for pure, unadulterated natural remedies in an increasingly synthetic world.
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                            Our journey began by connecting with authentic Hakeems and sourcing the finest herbs from the northern valleys to the southern plains. We bridge the gap between traditional knowledge and modern convenience.
                        </p>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Today, we are proud to serve thousands of families who trust our supplements, oils, and remedies. Every product reflects our commitment to purity, authenticity, and your total well-being.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "Quality First",
                                description: "We source only the rarest and purest herbs, rigorously tested for potency and authenticity."
                            },
                            {
                                icon: Heart,
                                title: "Customer Care",
                                description: "Your success is our success. We're here to support you every step of the way."
                            },
                            {
                                icon: Flower2,
                                title: "Sustainability",
                                description: "We promote organic, eco-friendly practices that respect nature and your health."
                            },
                            {
                                icon: Users,
                                title: "Community",
                                description: "Building a vibrant community of health-conscious individuals who share a passion for natural living."
                            }
                        ].map((value, index) => (
                            <div key={index} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:border-primary/50 transition-all group">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <value.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-primary/5 border-y border-zinc-200 dark:border-zinc-800 py-16 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { number: "5000+", label: "Happy Customers" },
                            { number: "500+", label: "Products" },
                            { number: "50+", label: "Cities Served" },
                            { number: "98%", label: "Satisfaction Rate" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                            Why Choose EDawakhana.pk?
                        </h2>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Pure ingredients, authentic results
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "100% Authentic",
                                description: "We guarantee the purity of every herb and ingredient in our medicine."
                            },
                            {
                                icon: HeartPulse,
                                title: "Clinically Tested",
                                description: "All remedies follow strict quality controls for safety and efficacy."
                            },
                            {
                                icon: Users,
                                title: "Hakeem Support",
                                description: "Access to traditional wisdom and expert advice for your health concerns."
                            },
                            {
                                icon: Flower2,
                                title: "Natural Ingredients",
                                description: "No synthetic additives or harmful chemicals—just pure nature."
                            },
                            {
                                icon: Award,
                                title: "Trusted Brand",
                                description: "A legacy of trust and thousands of satisfied, healthy customers."
                            },
                            {
                                icon: Heart,
                                title: "Holistic Approach",
                                description: "We believe in treating the person, not just the symptoms."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-lg transition-shadow">
                                <feature.icon className="h-8 w-8 text-primary mb-4" />
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-primary to-primary/80 py-20 px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Natural Health is Just a Step Away
                    </h2>
                    <p className="text-lg text-white/90 mb-8">
                        Join thousands of families across Pakistan choosing natural wellness. Explore our remedies today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/shop"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-all shadow-lg hover:scale-105"
                        >
                            Browse Products
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-all"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
