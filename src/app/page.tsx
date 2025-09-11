"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
  Globe, 
  TrendingUp, 
  Users, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Palette,
  Code,
  BarChart3,
  Target,
  Zap,
  Award,
  Clock,
  Shield,
  Rocket,
  ChevronUp,
  PlayCircle,
  MessageCircle,
  Calendar,
  ArrowDown,
  Eye,
  MousePointer,
  TrendingDown
} from 'lucide-react';

const AlturaCreativaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
    response: 0
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Update active section
      const sections = ['inicio', 'servicios', 'precios', 'testimonios', 'contacto'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        projects: 50,
        clients: 200,
        satisfaction: 98,
        response: 24
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  interface ScrollToSectionFn {
    (sectionId: string): void;
  }

  const scrollToSection: ScrollToSectionFn = (sectionId) => {
    const element: HTMLElement | null = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: <Globe className="h-12 w-12 text-[#EA526F] mb-4" />,
      title: "Creación de Webs",
      description: "Desarrollamos sitios web modernos, responsive y optimizados para convertir visitantes en clientes.",
      features: ["Diseño responsive", "SEO optimizado", "Carga rápida", "Fácil administración"],
      color: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#EA526F] mb-4" />,
      title: "Marketing Digital",
      description: "Estrategias digitales integrales para hacer crecer tu negocio en el mundo online.",
      features: ["Google Ads", "Redes sociales", "Email marketing", "Analytics"],
      color: "from-green-500/10 to-blue-500/10"
    },
    {
      icon: <Users className="h-12 w-12 text-[#EA526F] mb-4" />,
      title: "Consultoría Integral",
      description: "Asesoramiento completo para optimizar tu presencia digital y procesos empresariales.",
      features: ["Auditoría digital", "Estrategia", "Formación", "Soporte continuo"],
      color: "from-purple-500/10 to-pink-500/10"
    }
  ];

  const testimonials = [
    {
      name: "María González",
      company: "Restaurante La Perla",
      rating: 5,
      text: "Altura Creativa transformó completamente nuestro negocio. Nuestra web ahora genera reservas constantemente.",
      avatar: "MG",
      results: "+250% reservas online"
    },
    {
      name: "Carlos Ruiz",
      company: "Clínica Dental Sonrisa",
      rating: 5,
      text: "El equipo de marketing digital aumentó nuestras citas en un 300%. Profesionales excepcionales.",
      avatar: "CR",
      results: "+300% citas nuevas"
    },
    {
      name: "Ana Martín",
      company: "Boutique Fashion",
      rating: 5,
      text: "La consultoría integral nos ayudó a optimizar todos nuestros procesos. Resultados increíbles.",
      avatar: "AM",
      results: "+180% ventas online"
    }
  ];

  const plans = [
    {
      name: "Web Básica",
      price: "400€",
      description: "Perfecta para pequeños negocios",
      features: [
        "Diseño responsive",
        "5 páginas incluidas",
        "Formulario de contacto",
        "SEO básico",
        "Hosting 1 año gratis",
        "Certificado SSL",
        "Soporte técnico"
      ],
      popular: false,
      badge: null
    },
    {
      name: "Web Premium",
      price: "600€",
      description: "Para empresas que buscan destacar",
      features: [
        "Todo lo anterior",
        "Hasta 10 páginas",
        "Blog integrado",
        "SEO avanzado",
        "Analytics configurado",
        "Chat en vivo",
        "Soporte 6 meses"
      ],
      popular: true,
      badge: ""
    },
    {
      name: "Marketing 360°",
      price: "150€",
      description: "Estrategia digital completa",
      features: [
        "Gestión redes sociales",
        "Google Ads",
        "Email marketing",
        "Informes mensuales",
        "Consultoría continua",
        "Optimización continua"
      ],
      popular: false,
      badge: ""
    }
  ];

  const stats = [
    { number: counters.projects, suffix: '+', label: 'Proyectos Exitosos', icon: <Rocket className="h-6 w-6" /> },
    { number: counters.clients, suffix: '+', label: 'Clientes Satisfechos', icon: <Users className="h-6 w-6" /> },
    { number: counters.satisfaction, suffix: '%', label: 'Satisfacción Cliente', icon: <Star className="h-6 w-6" /> },
    { number: counters.response, suffix: 'h', label: 'Tiempo Respuesta', icon: <Clock className="h-6 w-6" /> }
  ];

  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {}

  const handleInputChange = (e: InputChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  interface FormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('¡Gracias por tu mensaje! Te contactaremos en menos de 24 horas.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F7FF] relative">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => scrollToSection('inicio')}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/logo.png" // <- empieza con "/" y apunta a /public
                  alt="Altura Creativa Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-[#070600] hidden sm:block">
                Estudio Altura Creativa
              </span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['inicio', 'servicios', 'precios', 'testimonios', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === section 
                      ? 'text-[#EA526F] border-b-2 border-[#EA526F] pb-1' 
                      : 'text-gray-700 hover:text-[#EA526F]'
                  }`}
                >
                  {section}
                </button>
              ))}
              <Button 
                className="bg-[#EA526F] hover:bg-[#d63d5a] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection('contacto')}
              >
                Empezar Proyecto
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {['inicio', 'servicios', 'precios', 'testimonios', 'contacto'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-lg font-medium text-gray-700 hover:text-[#EA526F] transition-colors capitalize text-left"
                    >
                      {section}
                    </button>
                  ))}
                  <Button 
                    className="bg-[#EA526F] hover:bg-[#d63d5a] text-white mt-4"
                    onClick={() => scrollToSection('contacto')}
                  >
                    Empezar Proyecto
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
  id="inicio"
  className="relative pt-24 pb-20 lg:pb-32 overflow-hidden"
>
  {/* Fondo Animado */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-60" />
  <div className="absolute top-20 left-10 w-64 h-64 bg-[#EA526F]/10 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Columna Izquierda */}
      <header className="space-y-8 animate-in fade-in-50 slide-in-from-left-5 duration-1000">
        <div className="space-y-6">
          <Badge className="bg-[#EA526F]/10 text-[#EA526F] hover:bg-[#EA526F]/20 border-0 px-4 py-2 text-sm font-medium">
            ✨ Agencia Digital Líder en España
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#070600] leading-tight">
            Elevamos tu{" "}
            <span className="bg-gradient-to-r from-[#EA526F] to-[#d63d5a] bg-clip-text text-transparent">
              presencia digital
            </span>{" "}
            al siguiente nivel
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            Creamos webs que convierten, estrategias de marketing que funcionan
            y consultoría que transforma negocios. Tu éxito digital comienza aquí.
          </p>
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-[#EA526F] hover:bg-[#d63d5a] text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
            onClick={() => scrollToSection("servicios")}
          >
            Ver Nuestros Servicios
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#EA526F] text-[#EA526F] hover:bg-[#EA526F] hover:text-white transition-all duration-300"
            onClick={() => scrollToSection("contacto")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Hablar con un Experto
          </Button>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {stats.map((stat, i) => (
            <article
              key={i}
              className="text-center group"
              aria-label={`Estadística ${stat.label}`}
            >
              <div className="flex items-center justify-center mb-2 text-[#EA526F]">
                {stat.icon}
              </div>
              <p className="text-2xl font-bold text-[#070600] group-hover:text-[#EA526F] transition-colors">
                {stat.number}
                {stat.suffix}
              </p>
              <span className="text-sm text-gray-600">{stat.label}</span>
            </article>
          ))}
        </div>
      </header>

      {/* Columna Derecha - Tarjetas */}
      <div className="relative animate-in fade-in-50 slide-in-from-right-5 duration-1000 delay-300">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white">
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: <Palette className="h-8 w-8 text-[#EA526F]" />,
                title: "Diseño Creativo",
                desc: "Interfaces que enamoran",
                bg: "from-blue-50 to-purple-50",
              },
              {
                icon: <Code className="h-8 w-8 text-[#EA526F]" />,
                title: "Desarrollo Web",
                desc: "Tecnología de vanguardia",
                bg: "from-green-50 to-blue-50",
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-[#EA526F]" />,
                title: "Marketing Digital",
                desc: "Resultados medibles",
                bg: "from-purple-50 to-pink-50",
              },
              {
                icon: <Target className="h-8 w-8 text-[#EA526F]" />,
                title: "Consultoría",
                desc: "Estrategia personalizada",
                bg: "from-pink-50 to-red-50",
              },
            ].map((card, i) => (
              <Card
                key={i}
                className={`p-6 bg-gradient-to-br ${card.bg} border-0 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group`}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-sm text-gray-800">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">{card.desc}</p>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Button
              variant="ghost"
              className="text-[#EA526F] hover:bg-[#EA526F]/10 group"
              onClick={() => scrollToSection("servicios")}
            >
              <ArrowDown className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Descubre cómo podemos ayudarte
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#F7F7FF] to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#EA526F]/10 text-[#EA526F] mb-6 px-4 py-2">
              Nuestros Servicios
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#070600] mb-6">
              Soluciones digitales que <span className="text-[#EA526F]">impulsan</span> tu negocio
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ofrecemos servicios integrales de marketing digital y desarrollo web para hacer crecer tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative p-8 hover:shadow-2xl transition-all duration-500 group border-0 bg-white hover:-translate-y-2 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <CardContent className="relative p-0">
                  <div className="text-center mb-6">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-[#070600] mb-4 group-hover:text-[#EA526F] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors">
                        <CheckCircle className="h-5 w-5 text-[#EA526F] mr-3 group-hover:scale-110 transition-transform" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#EA526F] hover:bg-[#d63d5a] text-white group-hover:shadow-xl transition-all duration-300">
                    Saber Más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">¿No estás seguro de qué servicio necesitas?</p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#EA526F] text-[#EA526F] hover:bg-[#EA526F] hover:text-white"
              onClick={() => scrollToSection('contacto')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Reserva una consulta gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F7F7FF] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-[#EA526F]/10 text-[#EA526F] px-4 py-2">
                ¿Por qué elegir Altura Creativa?
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#070600]">
                Experiencia que marca la <span className="text-[#EA526F]">diferencia</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Combinamos creatividad, tecnología y estrategia para entregar resultados excepcionales que superan las expectativas de nuestros clientes.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Zap className="h-6 w-6 text-white" />,
                    title: "Resultados Rápidos",
                    description: "Implementamos estrategias que generan resultados visibles en tiempo récord.",
                    color: "bg-[#EA526F]"
                  },
                  {
                    icon: <Award className="h-6 w-6 text-white" />,
                    title: "Calidad Premium",
                    description: "Cada proyecto es único y está diseñado con los más altos estándares de calidad.",
                    color: "bg-blue-500"
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-white" />,
                    title: "Soporte Continuo",
                    description: "Te acompañamos en cada paso del proceso con soporte personalizado 24/7.",
                    color: "bg-green-500"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`${feature.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#070600] mb-2 group-hover:text-[#EA526F] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "98%", label: "Satisfacción Cliente", icon: <Star className="h-6 w-6" />, color: "text-yellow-500" },
                { value: "300%", label: "ROI Promedio", icon: <TrendingUp className="h-6 w-6" />, color: "text-green-500" },
                { value: "50+", label: "Proyectos Activos", icon: <Rocket className="h-6 w-6" />, color: "text-blue-500" },
                { value: "24h", label: "Respuesta Media", icon: <Clock className="h-6 w-6" />, color: "text-[#EA526F]" }
              ].map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-0 bg-white">
                  <div className={`${stat.color} mb-3 flex justify-center group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#EA526F] mb-2 group-hover:scale-105 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#EA526F]/10 text-[#EA526F] mb-6 px-4 py-2">
              Precios Transparentes
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#070600] mb-6">
              Planes diseñados para <span className="text-[#EA526F]">tu éxito</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Sin letra pequeña, sin sorpresas. Elige el plan que mejor se adapte a tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 overflow-hidden ${
                plan.popular ? 'bg-gradient-to-br from-[#EA526F]/5 to-purple-500/5 ring-2 ring-[#EA526F]' : 'bg-white'
              }`}>
                {plan.badge && (
                  <Badge className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${
                    plan.popular ? 'bg-[#EA526F] text-white' : 'bg-blue-500 text-white'
                  } px-3 py-1 shadow-lg`}>
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-[#070600] mb-4">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#EA526F]">{plan.price}</span>
                    {plan.name.includes('Marketing') && <span className="text-gray-600 text-lg">/mes</span>}
                  </div>
                  <CardDescription className="text-gray-600 text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-[#EA526F] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full transition-all duration-300 ${plan.popular 
                      ? 'bg-[#EA526F] hover:bg-[#d63d5a] text-white shadow-lg hover:shadow-xl' 
                      : 'bg-white hover:bg-[#EA526F] text-[#EA526F] hover:text-white border border-[#EA526F]'
                    }`}
                    onClick={() => scrollToSection('contacto')}
                  >
                    Comenzar Ahora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Money Back Guarantee */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Garantía de Satisfacción</h3>
              <p className="text-gray-600">Si no estás 100% satisfecho en los primeros 30 días, te devolvemos tu dinero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-[#F7F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#EA526F]/10 text-[#EA526F] mb-6 px-4 py-2">
              Testimonios
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#070600] mb-6">
              Lo que dicen nuestros <span className="text-[#EA526F]">clientes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white group">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#EA526F] rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-[#070600]">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  
                  <div className="border-t pt-4">
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                      {testimonial.results}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Video Testimonials CTA */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">¿Quieres ver más casos de éxito?</p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#EA526F] text-[#EA526F] hover:bg-[#EA526F] hover:text-white group"
            >
              <PlayCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Ver Video Testimoniales
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <Badge className="bg-[#EA526F]/10 text-[#EA526F] mb-6 px-4 py-2">
                  Contacto
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#070600] mb-6">
                  ¿Listo para hacer crecer tu <span className="text-[#EA526F]">negocio</span>?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cuéntanos tu proyecto y te ayudaremos a convertir tus ideas en realidad. Respuesta garantizada en menos de 24 horas.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="h-6 w-6 text-white" />,
                    title: "Teléfono",
                    value: "641437667",
                    action: "tel:641437667",
                    color: "bg-[#EA526F]"
                  },
                  {
                    icon: <Mail className="h-6 w-6 text-white" />,
                    title: "Email",
                    value: "david@alturacreativa.com",
                    action: "mailto:david@alturacreativa.com",
                    color: "bg-blue-500"
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-white" />,
                    title: "Dirección",
                    value: "C/Antonio Jiménez Ruiz 27, Málaga",
                    action: "https://maps.google.com/?q=C/Antonio Jiménez Ruiz 27, Málaga",
                    color: "bg-green-500"
                  }
                ].map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4 group cursor-pointer" onClick={() => window.open(contact.action)}>
                    <div className={`${contact.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-[#070600] group-hover:text-[#EA526F] transition-colors">
                        {contact.title}
                      </div>
                      <div className="text-gray-600">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-[#070600] mb-4">Síguenos en redes sociales</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: <Facebook className="h-5 w-5" />, color: "hover:bg-blue-600" },
                    { icon: <Instagram className="h-5 w-5" />, color: "hover:bg-pink-600" },
                    { icon: <Twitter className="h-5 w-5" />, color: "hover:bg-blue-400" },
                    { icon: <Linkedin className="h-5 w-5" />, color: "hover:bg-blue-700" }
                  ].map((social, index) => (
                    <Button 
                      key={index}
                      size="icon" 
                      variant="outline" 
                      className={`border-gray-300 hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      {social.icon}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Card className="p-8 shadow-2xl border-0 bg-white">
                <CardHeader className="p-0 mb-8">
                  <CardTitle className="text-2xl font-bold text-[#070600] mb-2">
                    Solicita tu presupuesto
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Te contactaremos en menos de 24 horas con una propuesta personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Nombre *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-2 focus:ring-[#EA526F] focus:border-[#EA526F]"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Teléfono
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-2 focus:ring-[#EA526F] focus:border-[#EA526F]"
                          placeholder="Tu teléfono"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 focus:ring-[#EA526F] focus:border-[#EA526F]"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                        Servicio de interés
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA526F] focus:border-transparent"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="web">Creación de Web</option>
                        <option value="marketing">Marketing Digital</option>
                        <option value="consultoria">Consultoría Integral</option>
                        <option value="todo">Todo lo anterior</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Mensaje *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-2 focus:ring-[#EA526F] focus:border-[#EA526F]"
                        placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle que consideres importante..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#EA526F] hover:bg-[#d63d5a] text-white shadow-lg hover:shadow-xl transition-all duration-300 group py-3"
                    >
                      Enviar Mensaje
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Respuesta garantizada en menos de 24 horas
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070600] text-white py-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EA526F] to-purple-500"></div>
        <div className="absolute top-4 right-10 w-32 h-32 bg-[#EA526F]/10 rounded-full blur-2xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                <img
                  src="/logo.png" // <- empieza con "/" y apunta a /public
                  alt="Altura Creativa Logo"
                  className="w-full h-full object-contain"
                />
              </div>
                <span className="text-2xl font-bold">Altura Creativa</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Elevamos tu presencia digital con soluciones creativas que convierten visitantes en clientes y proyectos en éxitos.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, color: "hover:bg-blue-600" },
                  { icon: <Twitter className="h-5 w-5" />, color: "hover:bg-blue-400" },
                  { icon: <Instagram className="h-5 w-5" />, color: "hover:bg-pink-600" },
                  { icon: <Linkedin className="h-5 w-5" />, color: "hover:bg-blue-700" }
                ].map((social, index) => (
                  <Button 
                    key={index}
                    size="icon" 
                    variant="ghost" 
                    className={`hover:text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    {social.icon}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Servicios</h3>
              <ul className="space-y-4">
                {[
                  "Creación de Webs",
                  "Marketing Digital", 
                  "Consultoría Integral",
                  "SEO y SEM"
                ].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-[#EA526F] transition-colors flex items-center group">
                      <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400 hover:text-[#EA526F] transition-colors cursor-pointer" onClick={() => window.open('tel:641437667')}>
                  <Phone className="h-4 w-4 mr-3 text-[#EA526F]" />
                  641437667
                </li>
                <li className="flex items-center text-gray-400 hover:text-[#EA526F] transition-colors cursor-pointer" onClick={() => window.open('mailto:david@alturacreativa.com')}>
                  <Mail className="h-4 w-4 mr-3 text-[#EA526F]" />
                  david@alturacreativa.com
                </li>
                <li className="flex items-start text-gray-400 hover:text-[#EA526F] transition-colors cursor-pointer">
                  <MapPin className="h-4 w-4 mr-3 text-[#EA526F] mt-1 flex-shrink-0" />
                  <span>C/Antonio Jiménez Ruiz 27<br />Málaga</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Altura Creativa. Todos los derechos reservados.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0 flex items-center">
              MIT License
              <a href="#" className="ml-2 text-[#EA526F] hover:underline">Términos de Servicio</a>
              <span className="mx-2">|</span>
              <a href="#" className="text-[#EA526F] hover:underline">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#EA526F] hover:bg-[#d63d5a] text-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default AlturaCreativaWebsite;