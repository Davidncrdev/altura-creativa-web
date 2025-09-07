"use client";

import React, { useState } from 'react';
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
  Award
} from 'lucide-react';

const AlturaCreativaWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      icon: <Globe className="h-12 w-12 text-[#EA526F] mb-4" />,
      title: "Creación de Webs",
      description: "Desarrollamos sitios web modernos, responsive y optimizados para convertir visitantes en clientes.",
      features: ["Diseño responsive", "SEO optimizado", "Carga rápida", "Fácil administración"]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#EA526F] mb-4" />,
      title: "Marketing Digital",
      description: "Estrategias digitales integrales para hacer crecer tu negocio en el mundo online.",
      features: ["Google Ads", "Redes sociales", "Email marketing", "Analytics"]
    },
    {
      icon: <Users className="h-12 w-12 text-[#EA526F] mb-4" />,
      title: "Consultoría Integral",
      description: "Asesoramiento completo para optimizar tu presencia digital y procesos empresariales.",
      features: ["Auditoría digital", "Estrategia", "Formación", "Soporte continuo"]
    }
  ];

  const testimonials = [
    {
      name: "María González",
      company: "Restaurante La Perla",
      rating: 5,
      text: "Altura Creativa transformó completamente nuestro negocio. Nuestra web ahora genera reservas constantemente."
    },
    {
      name: "Carlos Ruiz",
      company: "Clínica Dental Sonrisa",
      rating: 5,
      text: "El equipo de marketing digital aumentó nuestras citas en un 300%. Profesionales excepcionales."
    },
    {
      name: "Ana Martín",
      company: "Boutique Fashion",
      rating: 5,
      text: "La consultoría integral nos ayudó a optimizar todos nuestros procesos. Resultados increíbles."
    }
  ];

  const plans = [
    {
      name: "Web Básica",
      price: "€899",
      description: "Perfecta para pequeños negocios",
      features: [
        "Diseño responsive",
        "5 páginas incluidas",
        "Formulario de contacto",
        "SEO básico",
        "Hosting 1 año gratis"
      ],
      popular: false
    },
    {
      name: "Web Premium",
      price: "€1.499",
      description: "Para empresas que buscan destacar",
      features: [
        "Todo lo anterior",
        "Hasta 10 páginas",
        "Blog integrado",
        "SEO avanzado",
        "Analytics configurado",
        "Soporte 6 meses"
      ],
      popular: true
    },
    {
      name: "Marketing 360°",
      price: "€299/mes",
      description: "Estrategia digital completa",
      features: [
        "Gestión redes sociales",
        "Google Ads",
        "Email marketing",
        "Informes mensuales",
        "Consultoría continua"
      ],
      popular: false
    }
  ];

  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> {}

  const handleInputChange = (e: InputChangeEvent) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  interface FormData {
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }

  interface FormEvent extends React.FormEvent<HTMLFormElement> {}

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F7FF]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#EA526F] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AC</span>
              </div>
              <span className="text-xl font-bold text-[#070600]">Altura Creativa</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-[#EA526F] transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-[#EA526F] transition-colors">Servicios</a>
              <a href="#precios" className="text-gray-700 hover:text-[#EA526F] transition-colors">Precios</a>
              <a href="#testimonios" className="text-gray-700 hover:text-[#EA526F] transition-colors">Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-[#EA526F] transition-colors">Contacto</a>
              <Button className="bg-[#EA526F] hover:bg-[#d63d5a] text-white">
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
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#inicio" className="text-lg font-medium text-gray-700 hover:text-[#EA526F] transition-colors">Inicio</a>
                  <a href="#servicios" className="text-lg font-medium text-gray-700 hover:text-[#EA526F] transition-colors">Servicios</a>
                  <a href="#precios" className="text-lg font-medium text-gray-700 hover:text-[#EA526F] transition-colors">Precios</a>
                  <a href="#testimonios" className="text-lg font-medium text-gray-700 hover:text-[#EA526F] transition-colors">Testimonios</a>
                  <a href="#contacto" className="text-lg font-medium text-gray-700 hover:text-[#EA526F] transition-colors">Contacto</a>
                  <Button className="bg-[#EA526F] hover:bg-[#d63d5a] text-white mt-4">
                    Empezar Proyecto
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-[#EA526F]/10 text-[#EA526F] hover:bg-[#EA526F]/20">
                  ✨ Agencia Digital Líder
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-[#070600] leading-tight">
                  Elevamos tu <span className="text-[#EA526F]">presencia digital</span> al siguiente nivel
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Creamos webs que convierten, estrategias de marketing que funcionan y consultoría que transforma negocios. Tu éxito digital comienza aquí.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#EA526F] hover:bg-[#d63d5a] text-white">
                  Ver Nuestros Servicios
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-[#EA526F] text-[#EA526F] hover:bg-[#EA526F] hover:text-white">
                  Hablar con un Experto
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#070600]">50+</div>
                  <div className="text-sm text-gray-600">Proyectos Exitosos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#070600]">5★</div>
                  <div className="text-sm text-gray-600">Valoración Media</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#070600]">24h</div>
                  <div className="text-sm text-gray-600">Tiempo Respuesta</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-[#EA526F]/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <Palette className="h-8 w-8 text-[#EA526F] mb-2" />
                    <h3 className="font-semibold text-sm">Diseño Creativo</h3>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <Code className="h-8 w-8 text-[#EA526F] mb-2" />
                    <h3 className="font-semibold text-sm">Desarrollo Web</h3>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <BarChart3 className="h-8 w-8 text-[#EA526F] mb-2" />
                    <h3 className="font-semibold text-sm">Marketing Digital</h3>
                  </Card>
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <Target className="h-8 w-8 text-[#EA526F] mb-2" />
                    <h3 className="font-semibold text-sm">Consultoría</h3>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#EA526F]/10 text-[#EA526F] mb-4">
              Nuestros Servicios
            </Badge>
            <h2 className="text-4xl font-bold text-[#070600] mb-4">
              Soluciones digitales que <span className="text-[#EA526F]">impulsan</span> tu negocio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos servicios integrales de marketing digital y desarrollo web para hacer crecer tu empresa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow group">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    {service.icon}
                    <h3 className="text-2xl font-bold text-[#070600] mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-[#EA526F] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-[#EA526F] hover:bg-[#d63d5a] text-white group-hover:shadow-lg transition-shadow">
                    Saber Más
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F7F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-[#EA526F]/10 text-[#EA526F] mb-4">
                ¿Por qué elegir Altura Creativa?
              </Badge>
              <h2 className="text-4xl font-bold text-[#070600] mb-6">
                Experiencia que marca la <span className="text-[#EA526F]">diferencia</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Combinamos creatividad, tecnología y estrategia para entregar resultados excepcionales que superan las expectativas de nuestros clientes.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#EA526F] p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#070600] mb-2">Resultados Rápidos</h3>
                    <p className="text-gray-600">Implementamos estrategias que generan resultados visibles en tiempo récord.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#EA526F] p-2 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#070600] mb-2">Calidad Premium</h3>
                    <p className="text-gray-600">Cada proyecto es único y está diseñado con los más altos estándares de calidad.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#EA526F] p-2 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#070600] mb-2">Soporte Continuo</h3>
                    <p className="text-gray-600">Te acompañamos en cada paso del proceso con soporte personalizado.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#EA526F] mb-2">98%</div>
                <div className="text-sm text-gray-600">Satisfacción Cliente</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#EA526F] mb-2">300%</div>
                <div className="text-sm text-gray-600">ROI Promedio</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#EA526F] mb-2">50+</div>
                <div className="text-sm text-gray-600">Proyectos Activos</div>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-[#EA526F] mb-2">24h</div>
                <div className="text-sm text-gray-600">Respuesta Media</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#EA526F]/10 text-[#EA526F] mb-4">
              Precios Transparentes
            </Badge>
            <h2 className="text-4xl font-bold text-[#070600] mb-4">
              Planes diseñados para <span className="text-[#EA526F]">tu éxito</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sin letra pequeña, sin sorpresas. Elige el plan que mejor se adapte a tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative p-8 hover:shadow-xl transition-shadow ${plan.popular ? 'border-[#EA526F] border-2' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#EA526F] text-white">
                    Más Popular
                  </Badge>
                )}
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-[#070600] mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#EA526F]">{plan.price}</span>
                    {plan.name.includes('Marketing') && <span className="text-gray-600">/mes</span>}
                  </div>
                  <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="h-5 w-5 text-[#EA526F] mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-[#EA526F] hover:bg-[#d63d5a] text-white' 
                      : 'bg-white hover:bg-[#EA526F] text-[#EA526F] hover:text-white border border-[#EA526F]'
                    }`}
                  >
                    Comenzar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 bg-[#F7F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#EA526F]/10 text-[#EA526F] mb-4">
              Testimonios
            </Badge>
            <h2 className="text-4xl font-bold text-[#070600] mb-4">
              Lo que dicen nuestros <span className="text-[#EA526F]">clientes</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-[#070600]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <Badge className="bg-[#EA526F]/10 text-[#EA526F] mb-4">
                Contacto
              </Badge>
              <h2 className="text-4xl font-bold text-[#070600] mb-6">
                ¿Listo para hacer crecer tu <span className="text-[#EA526F]">negocio</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Cuéntanos tu proyecto y te ayudaremos a convertir tus ideas en realidad. Respuesta garantizada en menos de 24 horas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-[#EA526F] p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#070600]">Teléfono</div>
                    <div className="text-gray-600">641437667</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#EA526F] p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#070600]">Email</div>
                    <div className="text-gray-600">david@alturacreativa.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#EA526F] p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#070600]">Dirección</div>
                    <div className="text-gray-600">C/Antonio Jiménez Ruiz 27, Málaga</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="p-8 shadow-xl">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-2xl font-bold text-[#070600]">Solicita tu presupuesto</CardTitle>
                  <CardDescription>Te contactaremos en menos de 24 horas</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nombre *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Servicio de interés</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#EA526F] focus:border-transparent"
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="web">Creación de Web</option>
                        <option value="marketing">Marketing Digital</option>
                        <option value="consultoria">Consultoría Integral</option>
                        <option value="todo">Todo lo anterior</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>
                    <Button type="submit" className="w-full bg-[#EA526F] hover:bg-[#d63d5a] text-white">
                      Enviar Mensaje
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#070600] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-[#EA526F] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AC</span>
                </div>
                <span className="text-2xl font-bold">Altura Creativa</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Elevamos tu presencia digital con soluciones creativas que convierten visitantes en clientes y proyectos en éxitos.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="hover:bg-[#EA526F] hover:text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-[#EA526F] hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-[#EA526F] hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-[#EA526F] hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Servicios</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-[#EA526F] transition-colors">Creación de Webs</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#EA526F] transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#EA526F] transition-colors">Consultoría Integral</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#EA526F] transition-colors">SEO y SEM</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-400">
                  <Phone className="h-4 w-4 mr-2 text-[#EA526F]" />
                  641437667
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail className="h-4 w-4 mr-2 text-[#EA526F]" />
                  david@alturacreativa.com
                </li>
                <li className="flex items-start text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 text-[#EA526F] mt-1" />
                  C/Antonio Jiménez Ruiz 27<br />Málaga
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-800" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Altura Creativa. Todos los derechos reservados.
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              Desarrollado por Altura Creativa ©
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlturaCreativaWebsite;