export default function AboutUs() {
  return (
    <section id="aboutUs" className="w-full bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center md:text-left mb-8">SOBRE NÓS</h1>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-48 h-48 bg-gray-700 rounded-full"></div>
          </div>

          <div className="w-full md:w-1/2 space-y-4 text-lg">
            <p>
              A Capial Games é um estúdio indie de desenvolvimento de jogos do Mato Grosso do Sul, fundado por
              Mauricio de Souza e Gabriel Ferreira Medeiros. Com uma equipe multidisciplinar, o estúdio cria jogos
              educacionais e culturais que valorizam a identidade regional.
            </p>
            <p>
              Apesar das dificuldades de se trabalhar com desenvolvimento de jogos em cidades mais interioranas e
              tradicionais como a nossa, o estúdio Capial tem ganhado espaço em editais e oportunidades que vêm
              surgindo no estado do agro!
            </p>
            <p>
              A Capial Games une inovação, educação e cultura para transformar o cenário dos games no Brasil. Nosso
              objetivo é preservar e divulgar as várias facetas da diversidade cultural do Brasil, não só para o
              brasileiro mas também para todo o mundo!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
