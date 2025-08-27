import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="mb-4 text-gray-700">
              With 2 years of experience in full stack development, I've had the
              privilege of working with various clients and projects to bring
              their digital visions to life.
            </p>
            <p className="mb-4 text-gray-700">
              I specialize in full stack development with React, TypeScript,
              Node.js, and modern web technologies. My approach combines
              frontend expertise with solid backend knowledge, ensuring that
              every project not only functions flawlessly but also provides an
              exceptional user experience from end to end.
            </p>
            <p className="text-gray-700">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities like hiking and photography.
            </p>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  2 years in full stack development
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projects Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">9+ successful projects</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Happy Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">9+ satisfied clients</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
