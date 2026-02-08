import { useEffect, useState, useRef } from 'react';
import { Play, Music, Youtube, ExternalLink, Disc, Volume2, Heart, Share2, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import './App.css';

interface Album {
  id: number;
  title: string;
  songs: number;
  genre: string;
  year: string;
  color: string;
  tracks: string[];
  youtubeUrl: string;
}

const albums: Album[] = [
  {
    id: 1,
    title: "Infinite Glow",
    songs: 10,
    genre: "Pop / Electronic",
    year: "2024",
    color: "from-purple-500 to-pink-500",
    tracks: ["Between the Echoes", "Electric Chemistry", "Fire in the Silence", "Glow With You", "Gravity of You", "Midnight on the Skyline", "Run Into My Heart", "Silver Heart", "Wild for Tonight", "World in Your Hands"],
    youtubeUrl: "https://www.youtube.com/watch?v=isG1V6UL1Ko&list=OLAK5uy_nqb4W7aeFAK2WigsdVv7ZAXlEMJGXOo-8"
  },
  {
    id: 2,
    title: "Not Just Hop",
    songs: 11,
    genre: "Hip Hop / Rap",
    year: "2024",
    color: "from-orange-500 to-red-500",
    tracks: ["Flexin Through the Storm", "No Sleep Til the Bag", "Born for Greatness", "City Lights And Fast Life", "Drip Harder Than My Tears", "Timeline Talking", "From Zero to Hero", "Pressure Made Diamonds", "Cold World, Hot Dreams", "Boss Energy", "Hood Prophet"],
    youtubeUrl: "https://www.youtube.com/watch?v=6AVpz1QGpjI&list=OLAK5uy_kZGTP5N_2zpJ2IpwSN3c3jCis25408BHQ"
  },
  {
    id: 3,
    title: "Not Just Hop II",
    songs: 9,
    genre: "Hip Hop / Rap",
    year: "2024",
    color: "from-blue-500 to-cyan-500",
    tracks: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5", "Track 6", "Track 7", "Track 8", "Track 9"],
    youtubeUrl: "https://www.youtube.com/watch?v=WFTMy7hnvLk&list=OLAK5uy_mMknV-AeN5yZgF6bmmdO3tyb-soBMeV2s"
  },
  {
    id: 4,
    title: "Electric Heartbeats",
    songs: 10,
    genre: "Electronic / Dance",
    year: "2024",
    color: "from-green-400 to-emerald-600",
    tracks: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5", "Track 6", "Track 7", "Track 8", "Track 9", "Track 10"],
    youtubeUrl: "https://www.youtube.com/watch?v=m8lCdrShnnU&list=OLAK5uy_kgA66C3ryYKevOtfV5jbiO5Zgm84ldBJk"
  },
  {
    id: 5,
    title: "Soul Music II",
    songs: 10,
    genre: "Soul / R&B",
    year: "2024",
    color: "from-amber-400 to-orange-500",
    tracks: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5", "Track 6", "Track 7", "Track 8", "Track 9", "Track 10"],
    youtubeUrl: "https://www.youtube.com/watch?v=P9OpbnzStzs&list=OLAK5uy_l2IXmT-vbp2t49UKmt0twdC0tqQzrQpKM"
  },
  {
    id: 6,
    title: "Coffee and Confession",
    songs: 9,
    genre: "Acoustic / Chill",
    year: "2024",
    color: "from-rose-400 to-pink-600",
    tracks: ["Track 1", "Track 2", "Track 3", "Track 4", "Track 5", "Track 6", "Track 7", "Track 8", "Track 9"],
    youtubeUrl: "https://www.youtube.com/watch?v=1k6_biBikyM&list=OLAK5uy_luTKyY5IA1qPAfeqAdo39aD_o86rnkyKE"
  }
];

function App() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const audioBarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (audioBarsRef.current) {
      const bars = audioBarsRef.current.querySelectorAll('.audio-bar');
      bars.forEach((bar, index) => {
        const el = bar as HTMLElement;
        el.style.animationDelay = `${index * 0.1}s`;
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openYouTube = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 100 ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Music className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold tracking-wider">ONE VOICE MUSIC</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-purple-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-400 transition-colors">About</button>
            <button onClick={() => scrollToSection('music')} className="hover:text-purple-400 transition-colors">Music</button>
            <button onClick={() => scrollToSection('youtube')} className="hover:text-purple-400 transition-colors">YouTube</button>
          </div>
          <Button 
            onClick={() => openYouTube('https://youtube.com/channel/UCDfL8olUbziLwh6oANAyyXA')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Youtube className="w-4 h-4 mr-2" />
            Subscribe
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-black">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Audio Visualizer */}
          <div ref={audioBarsRef} className="flex justify-center items-end gap-1 h-16 mb-8">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="audio-bar w-1 bg-gradient-to-t from-purple-500 to-pink-500 rounded-full animate-audio-bar"
                style={{ height: '20%' }}
              />
            ))}
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
              ONE VOICE
            </span>
            <br />
            <span className="text-white">MUSIC</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto">
            AI-Generated Music Artist
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Creating unique sounds across Pop, Hip Hop, Electronic, and Soul genres
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('music')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6"
            >
              <Disc className="w-5 h-5 mr-2" />
              Explore Music
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => openYouTube('https://youtube.com/channel/UCDfL8olUbziLwh6oANAyyXA')}
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-6"
            >
              <Youtube className="w-5 h-5 mr-2" />
              Watch on YouTube
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-purple-400">6</div>
              <div className="text-sm text-gray-400 mt-1">Albums</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-pink-400">59+</div>
              <div className="text-sm text-gray-400 mt-1">Songs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-blue-400">4</div>
              <div className="text-sm text-gray-400 mt-1">Genres</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-scroll" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About the Artist
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                One Voice Music is an AI-powered music project pushing the boundaries of creative expression. 
                Using cutting-edge artificial intelligence, we craft unique sonic experiences that span multiple genres 
                and emotions.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                From the energetic beats of "Not Just Hop" to the soulful melodies of "Soul Music II", 
                each album tells a different story. Our music is distributed worldwide through Amuseio AB, 
                making it accessible to listeners everywhere.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Headphones className="w-8 h-8 text-purple-400" />
                    <div>
                      <div className="font-semibold">AI Generated</div>
                      <div className="text-sm text-gray-400">Cutting-edge technology</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Volume2 className="w-8 h-8 text-pink-400" />
                    <div>
                      <div className="font-semibold">Multi-Genre</div>
                      <div className="text-sm text-gray-400">Diverse musical styles</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-30" />
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Music className="w-16 h-16 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Musical Diversity</h3>
                <div className="space-y-3">
                  {['Pop / Electronic', 'Hip Hop / Rap', 'Soul / R&B', 'Acoustic / Chill'].map((genre, i) => (
                    <div key={genre} className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${['bg-purple-500', 'bg-pink-500', 'bg-blue-500', 'bg-green-500'][i]}`} />
                      <span className="text-gray-300">{genre}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music/Albums Section */}
      <section id="music" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/10 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Discography
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore our collection of AI-generated albums, each with its own unique sound and style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Card 
                key={album.id} 
                className="group bg-white/5 border-white/10 hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => openYouTube(album.youtubeUrl)}
              >
                <div className={`h-2 bg-gradient-to-r ${album.color}`} />
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${album.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Disc className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{album.title}</h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Music className="w-4 h-4" />
                      {album.songs} songs
                    </span>
                    <span>{album.year}</span>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4">{album.genre}</p>
                  
                  <div className="space-y-1 max-h-32 overflow-y-auto scrollbar-thin">
                    {album.tracks.slice(0, 4).map((track, i) => (
                      <div key={i} className="text-sm text-gray-400 truncate flex items-center gap-2">
                        <span className="text-gray-600 w-4">{i + 1}</span>
                        {track}
                      </div>
                    ))}
                    {album.tracks.length > 4 && (
                      <div className="text-sm text-purple-400">+{album.tracks.length - 4} more tracks</div>
                    )}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Listen on YouTube
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section id="youtube" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur-2xl opacity-30" />
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                      <Youtube className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">One Voice Music</h3>
                      <p className="text-gray-400">YouTube Channel</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-red-400">65+</div>
                      <div className="text-xs text-gray-400">Videos</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-red-400">6</div>
                      <div className="text-xs text-gray-400">Albums</div>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-red-400">4</div>
                      <div className="text-xs text-gray-400">Genres</div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => openYouTube('https://youtube.com/channel/UCDfL8olUbziLwh6oANAyyXA')}
                    className="w-full bg-red-600 hover:bg-red-700"
                  >
                    <Youtube className="w-5 h-5 mr-2" />
                    Subscribe on YouTube
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  Watch on YouTube
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Experience our music visually on YouTube. Each track is accompanied by stunning visuals 
                that enhance the listening experience. Subscribe to stay updated with new releases.
              </p>
              <p className="text-gray-400 text-lg mb-8">
                Distributed worldwide by Amuseio AB
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => openYouTube('https://youtube.com/channel/UCDfL8olUbziLwh6oANAyyXA')}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Play All
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => openYouTube('https://youtube.com/channel/UCDfL8olUbziLwh6oANAyyXA')}
                  className="border-white/20 hover:bg-white/10"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tracks Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Featured Tracks
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Handpicked songs from our collection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              { title: "Between the Echoes", album: "Infinite Glow", duration: "3:10" },
              { title: "Electric Chemistry", album: "Infinite Glow", duration: "3:41" },
              { title: "Flexin Through the Storm", album: "Not Just Hop", duration: "2:43" },
              { title: "Born for Greatness", album: "Not Just Hop", duration: "2:12" },
              { title: "Fire in the Silence", album: "Infinite Glow", duration: "3:34" },
              { title: "City Lights And Fast Life", album: "Not Just Hop", duration: "2:32" },
            ].map((track, i) => (
              <div 
                key={i}
                className="group flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                onClick={() => openYouTube('https://youtube.com/channel/UCDfL8olUbziLwh6oANAyyXA')}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </div>
                <div className="flex-1">
                  <div className="font-medium group-hover:text-purple-400 transition-colors">{track.title}</div>
                  <div className="text-sm text-gray-500">{track.album}</div>
                </div>
                <div className="text-sm text-gray-500">{track.duration}</div>
                <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Music className="w-6 h-6 text-purple-500" />
              <span className="text-lg font-bold tracking-wider">ONE VOICE MUSIC</span>
            </div>
            
            <div className="flex items-center gap-6">
              <button 
                onClick={() => openYouTube('https://youtube.com/channel/UCDfL8olUbziLwh6oANAyyXA')}
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scrollToSection('music')}
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Music className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <Heart className="w-6 h-6" />
              </button>
            </div>
            
            <div className="text-gray-500 text-sm">
              © 2024 One Voice Music. All rights reserved.
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-600 text-sm">
            <p>Music distributed by Amuseio AB</p>
            <p className="mt-2">AI-Generated Music Project</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
