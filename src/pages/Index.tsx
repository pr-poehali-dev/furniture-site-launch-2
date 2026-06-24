import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const IMG = {
  cabinet: 'https://cdn.poehali.dev/projects/8cca4d77-3b1c-4de9-912f-8872f5f8b6f3/files/f279b92b-adbd-4ff4-9e68-c41874811abf.jpg',
  wardrobe: 'https://cdn.poehali.dev/projects/8cca4d77-3b1c-4de9-912f-8872f5f8b6f3/files/9607208b-85da-4735-92fa-f9a01b7d3e5e.jpg',
  kitchen: 'https://cdn.poehali.dev/projects/8cca4d77-3b1c-4de9-912f-8872f5f8b6f3/files/b4cd1925-0fed-4bcb-973d-f4b68861e6d2.jpg',
};

const NAV = [
  { id: 'services', label: 'Услуги' },
  { id: 'about', label: 'О мастере' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  { icon: 'ChefHat', title: 'Кухни на заказ', text: 'Проектирование и изготовление кухонных гарнитуров из корпусной мебели под ваше пространство.' },
  { icon: 'DoorClosed', title: 'Гардеробные и шкафы', text: 'Встроенные системы хранения с продуманной эргономикой и фурнитурой премиум-класса.' },
  { icon: 'Sofa', title: 'Корпусная мебель', text: 'Комоды, тумбы, стеллажи и витрины по индивидуальным размерам и эскизам.' },
];

const FILTERS = [
  { id: 'all', label: 'Все работы' },
  { id: 'kitchen', label: 'Кухни' },
  { id: 'wardrobe', label: 'Гардеробные' },
  { id: 'cabinet', label: 'Корпусная мебель' },
];

const WORKS = [
  { img: IMG.cabinet, cat: 'cabinet', title: 'Белый стеллаж в гостиную', place: 'Частный дом, Москва' },
  { img: IMG.wardrobe, cat: 'wardrobe', title: 'Белая гардеробная', place: 'Квартира, Санкт-Петербург' },
  { img: IMG.kitchen, cat: 'kitchen', title: 'Белая кухня на заказ', place: 'Загородный дом' },
  { img: IMG.kitchen, cat: 'kitchen', title: 'Кухня в белом цвете', place: 'Апартаменты, Москва' },
  { img: IMG.cabinet, cat: 'cabinet', title: 'Белая корпусная мебель', place: 'Кабинет, Казань' },
  { img: IMG.wardrobe, cat: 'wardrobe', title: 'Встроенный белый шкаф-купе', place: 'Спальня, Сочи' },
];

const REVIEWS = [
  { name: 'Анна Светлова', role: 'Дизайнер интерьера', text: 'Работаю с мастером уже три года. Сроки соблюдаются всегда, качество исполнения — образцовое. Рекомендую без сомнений.' },
  { name: 'Дмитрий Орлов', role: 'Частный клиент', text: 'Заказывал кухню из корпусной мебели. Результат превзошёл ожидания — внимание к деталям на каждом миллиметре.' },
  { name: 'Елена Кравцова', role: 'Архитектор', text: 'Профессионал высочайшего класса. Помог реализовать сложный проект гардеробной точно по эскизам.' },
];

const Index = () => {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = WORKS.filter((w) => filter === 'all' || w.cat === filter);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen grain">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="font-display text-2xl font-semibold tracking-wide text-primary">
            ЗАЙНАШЕВ<span className="text-accent">.</span>
          </button>
          <nav className="hidden md:flex items-center gap-9">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contacts')} className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none uppercase tracking-wider text-xs h-10">
            Заказать
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.kitchen} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/45 to-foreground/10" />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl text-primary-foreground animate-fade-in">
            <p className="uppercase tracking-[0.35em] text-accent text-sm mb-6">Авторская мебель с 2008 года</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-balance">
              Мебель, созданная вручную для вашего дома
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-lg mb-10 leading-relaxed">
              Проектирую и изготавливаю корпусную мебель на заказ. Каждое изделие — результат точного расчёта и ручного труда.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('portfolio')} className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-13 px-8 uppercase tracking-wider text-xs">
                Смотреть работы
              </Button>
              <Button onClick={() => scrollTo('contacts')} variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none h-13 px-8 uppercase tracking-wider text-xs">
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[['21', 'лет опыта'], ['340+', 'проектов'], ['100%', 'ручная работа'], ['24', 'месяца гарантии']].map(([n, l]) => (
            <div key={l} className="py-10 px-4 text-center">
              <div className="font-display text-4xl md:text-5xl text-accent">{n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container">
          <div className="max-w-xl mb-16">
            <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">Что я делаю</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">Услуги мастерской</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-card p-8 group hover:bg-secondary transition-colors">
                <Icon name={s.icon} size={36} className="text-accent mb-6" />
                <h3 className="font-display text-2xl text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-primary text-primary-foreground">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src={IMG.kitchen} alt="Мастер за работой" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 hidden md:block">
              <div className="font-display text-4xl">2008</div>
              <div className="text-xs uppercase tracking-widest">основана мастерская</div>
            </div>
          </div>
          <div>
            <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">О мастере</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Ильдар Зайнашев</h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-5">
              Более двадцати одного года я создаю корпусную мебель на заказ. Начинал подмастерьем в столярной мастерской, сегодня руковожу собственным производством полного цикла.
            </p>
            <p className="text-primary-foreground/80 leading-relaxed mb-8">
              Я лично участвую в каждом проекте — от первого эскиза до финальной сборки. Работаю только с проверенными материалами и фурнитурой европейского качества.
            </p>
            <div className="space-y-4">
              {['Личный контроль на всех этапах', 'Только качественные материалы', 'Точные сроки и прозрачная смета'].map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <Icon name="Check" size={18} className="text-accent" />
                  <span className="text-primary-foreground/90">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-xl">
              <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">Галерея работ</p>
              <h2 className="font-display text-4xl md:text-5xl text-primary">Реализованные проекты</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-5 py-2 text-xs uppercase tracking-wider border transition-colors ${
                    filter === f.id ? 'bg-accent border-accent text-accent-foreground' : 'border-border text-muted-foreground hover:border-accent hover:text-accent'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((w, i) => {
              const globalIdx = WORKS.indexOf(w);
              return (
                <button
                  key={i}
                  onClick={() => setLightbox(globalIdx)}
                  className="group relative overflow-hidden text-left animate-scale-in"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={w.img} alt={w.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-display text-2xl text-primary-foreground">{w.title}</h3>
                    <p className="text-sm text-primary-foreground/70">{w.place}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Expand" size={18} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 bg-secondary">
        <div className="container">
          <div className="max-w-xl mb-16">
            <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">Отзывы клиентов</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary">Что говорят о работе</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-card p-8 border border-border flex flex-col">
                <div className="flex gap-1 text-accent mb-5">
                  {Array.from({ length: 5 }).map((_, i) => <Icon key={i} name="Star" size={16} className="fill-accent" />)}
                </div>
                <p className="text-foreground/80 leading-relaxed flex-1 italic font-display text-lg">«{r.text}»</p>
                <div className="mt-6 pt-5 border-t border-border">
                  <div className="font-semibold text-primary">{r.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 bg-primary text-primary-foreground">
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-accent text-sm mb-4">Контакты</p>
            <h2 className="font-display text-4xl md:text-5xl mb-8">Обсудим ваш проект</h2>
            <p className="text-primary-foreground/80 leading-relaxed mb-10 max-w-md">
              Расскажите о задумке — подготовлю эскиз и смету. Первая консультация и выезд на замер бесплатны.
            </p>
            <div className="space-y-6">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (927) 461-82-75' },
                { icon: 'MapPin', label: 'Мастерская', value: 'Москва, ул. Столярная, 12' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-5">
                  <div className="w-12 h-12 border border-accent/40 flex items-center justify-center text-accent shrink-0">
                    <Icon name={c.icon} size={20} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-primary-foreground/60">{c.label}</div>
                    <div className="text-lg">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="bg-card text-foreground p-8 md:p-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Ваше имя</label>
              <input type="text" className="w-full mt-2 bg-transparent border-b border-border focus:border-accent outline-none py-2 transition-colors" placeholder="Как к вам обращаться" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Телефон</label>
              <input type="tel" className="w-full mt-2 bg-transparent border-b border-border focus:border-accent outline-none py-2 transition-colors" placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">О проекте</label>
              <textarea rows={4} className="w-full mt-2 bg-transparent border-b border-border focus:border-accent outline-none py-2 transition-colors resize-none" placeholder="Что хотите заказать" />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-none h-12 uppercase tracking-wider text-xs">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-primary-foreground/10 py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-primary-foreground/60 text-sm">
          <div className="font-display text-xl text-primary-foreground">ЗАЙНАШЕВ<span className="text-accent">.</span></div>
          <p>© 2026 Мастерская авторской мебели. Все права защищены.</p>
        </div>
      </footer>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors" onClick={() => setLightbox(null)}>
            <Icon name="X" size={32} />
          </button>
          <button
            className="absolute left-4 md:left-10 text-primary-foreground hover:text-accent transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + WORKS.length) % WORKS.length); }}
          >
            <Icon name="ChevronLeft" size={44} />
          </button>
          <button
            className="absolute right-4 md:right-10 text-primary-foreground hover:text-accent transition-colors"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % WORKS.length); }}
          >
            <Icon name="ChevronRight" size={44} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={WORKS[lightbox].img} alt={WORKS[lightbox].title} className="w-full max-h-[75vh] object-contain" />
            <div className="text-center mt-6">
              <h3 className="font-display text-3xl text-primary-foreground">{WORKS[lightbox].title}</h3>
              <p className="text-primary-foreground/70 mt-1">{WORKS[lightbox].place}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;