export const languages = {
  JavaScript: {
    name: 'JavaScript',
    projectTypes: ['Web', 'Mobile', 'Desktop'],
    description:
      'A versatile scripting language primarily used for web development and building interactive websites, as well as mobile and desktop applications with frameworks like React Native and Electron.',
    Web: ['React', 'Vue', 'NextJS', 'Angular', 'Express', 'Svelte'],
    Mobile: ['React Native', 'Ionic', 'Flutter', 'Cordova'],
    Desktop: ['Electron', 'NW.js', 'React Native for Windows'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Heroku', 'Netlify'],
  },
  Python: {
    name: 'Python',
    projectTypes: ['Web', 'Desktop', 'Mobile', 'Embedded'],
    description:
      'A high-level language known for its readability and ease of use. Commonly used for web development, data analysis, machine learning, desktop applications, and embedded systems.',
    Web: ['Django', 'Flask', 'FastAPI', 'Tornado'],
    Desktop: ['Tkinter', 'PyQt', 'Kivy'],
    Mobile: ['Kivy', 'BeeWare'],
    Embedded: ['MicroPython', 'CircuitPython'],
    databases: ['SQLite', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    cloud: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Heroku', 'DigitalOcean'],
  },
  Java: {
    name: 'Java',
    projectTypes: ['Web', 'Mobile', 'Desktop', 'Embedded'],
    description:
      'A widely-used object-oriented language known for its portability and performance. It powers Android apps, web applications, and is also used in desktop and embedded systems.',
    Web: ['Spring', 'JSF', 'Struts'],
    Mobile: ['Android SDK', 'React Native'],
    Desktop: ['JavaFX', 'Swing'],
    Embedded: ['Java ME', 'Embedded Java'],
    databases: ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle DB', 'MongoDB'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'IBM Cloud'],
  },
  CSharp: {
    name: 'C#',
    projectTypes: ['Web', 'Desktop', 'Mobile'],
    description:
      'A language developed by Microsoft, commonly used for web development (with ASP.NET), building desktop applications, and creating cross-platform mobile apps with Xamarin.',
    Web: ['ASP.NET', 'Blazor'],
    Desktop: ['WPF', 'WinForms'],
    Mobile: ['Xamarin'],
    databases: ['SQL Server', 'SQLite', 'MongoDB', 'PostgreSQL'],
    cloud: ['Azure', 'AWS', 'Google Cloud', 'Heroku'],
  },
  Ruby: {
    name: 'Ruby',
    projectTypes: ['Web'],
    description:
      'A dynamic, object-oriented language, mainly used for web development, especially with the Ruby on Rails framework.',
    Web: ['Ruby on Rails', 'Sinatra'],
    databases: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'],
    cloud: ['AWS', 'Google Cloud', 'Heroku'],
  },
  Swift: {
    name: 'Swift',
    projectTypes: ['Mobile', 'Desktop'],
    description:
      'A powerful and intuitive language developed by Apple, primarily used for building iOS, macOS, watchOS, and tvOS applications.',
    Mobile: ['SwiftUI', 'UIKit'],
    Desktop: ['Cocoa', 'SwiftUI'],
    databases: ['Core Data', 'SQLite', 'Firebase'],
    cloud: ['iCloud', 'AWS', 'Google Cloud'],
  },
  Kotlin: {
    name: 'Kotlin',
    projectTypes: ['Mobile', 'Web'],
    description:
      'A modern programming language that runs on the JVM, used for Android app development and web applications, often as an alternative to Java.',
    Mobile: ['Android SDK', 'Ktor'],
    Web: ['Kotlin/JS', 'Ktor'],
    databases: ['SQLite', 'Room Database', 'Firebase', 'PostgreSQL'],
    cloud: ['Firebase', 'AWS', 'Google Cloud', 'Heroku'],
  },
  C: {
    name: 'C',
    projectTypes: ['Embedded', 'Desktop'],
    description:
      'One of the oldest and most influential programming languages, used for system programming, embedded systems, and low-level applications.',
    Embedded: ['FreeRTOS', 'Contiki'],
    Desktop: ['GTK', 'Qt'],
    databases: ['SQLite', 'MySQL'],
    cloud: ['AWS', 'Google Cloud'],
  },
  CPlusPlus: {
    name: 'C++',
    projectTypes: ['Embedded', 'Desktop'],
    description:
      'An extension of the C programming language that supports object-oriented programming. Used for system software, game development, embedded systems, and performance-critical applications.',
    Embedded: ['Arduino', 'Qt for Embedded'],
    Desktop: ['Qt', 'GTK', 'MFC'],
    databases: ['SQLite', 'PostgreSQL', 'MySQL'],
    cloud: ['AWS', 'Azure', 'Google Cloud'],
  },
  PHP: {
    name: 'PHP',
    projectTypes: ['Web'],
    description:
      'A server-side scripting language widely used for web development, particularly for creating dynamic and interactive websites and web applications.',
    Web: ['Laravel', 'Symfony', 'CodeIgniter', 'WordPress'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
    cloud: ['AWS', 'Google Cloud', 'Heroku'],
  },
  Go: {
    name: 'Go',
    projectTypes: ['Web', 'Desktop'],
    description:
      'A statically typed language designed by Google, known for its simplicity and performance. It is often used for web development and backend services.',
    Web: ['Gin', 'Echo', 'Revel'],
    Desktop: ['GTK', 'Qt'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'Heroku'],
  },
  Rust: {
    name: 'Rust',
    projectTypes: ['Embedded', 'Desktop'],
    description:
      'A systems programming language designed for speed and safety, particularly for developing embedded systems, operating systems, and performance-critical applications.',
    Embedded: ['RTIC', 'Tock'],
    Desktop: ['Gtk-rs', 'Druid'],
    databases: ['SQLite', 'PostgreSQL', 'Redis'],
    cloud: ['AWS', 'Google Cloud', 'Azure'],
  },
  TypeScript: {
    name: 'TypeScript',
    projectTypes: ['Web', 'Mobile'],
    description:
      'A superset of JavaScript that adds static typing. It’s widely used in large-scale web applications and also for building mobile apps using frameworks like Ionic and React Native.',
    Web: ['Angular', 'React', 'Vue', 'NextJS', 'NestJS'],
    Mobile: ['Ionic', 'React Native'],
    databases: ['MongoDB', 'PostgreSQL', 'MySQL', 'SQLite'],
    cloud: ['AWS', 'Google Cloud', 'Azure', 'Firebase'],
  },
  Dart: {
    name: 'Dart',
    projectTypes: ['Mobile', 'Web'],
    description:
      'A language optimized for building cross-platform mobile applications using Flutter, as well as web applications.',
    Mobile: ['Flutter'],
    Web: ['AngularDart', 'Flutter Web'],
    databases: ['Firebase', 'SQLite', 'MongoDB'],
    cloud: ['Firebase', 'AWS', 'Google Cloud'],
  },
};
