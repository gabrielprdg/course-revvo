# Revvo Challenge - Portal de Cursos

## ✅ **IMPLEMENTADO COMPLETAMENTE:**

### **CRUD de Cursos:**
- ✅ Backend: API completa (GET, POST, PUT, DELETE) em `backend/cursos/index.php`
- ✅ Frontend: Componente `CoursesSection.jsx` com modal para adicionar cursos
- ✅ Banco de dados: Tabela `cursos` com campos image, title, description
- ✅ Interface: Modal para adicionar novos cursos

### **Slideshow Dinâmico:**
- ✅ Frontend: Componente `Slideshow.jsx` que usa os cursos como slides
- ✅ Cada slide mostra um curso específico da tabela de cursos
- ✅ Botão "VER CURSO" que direciona para a seção de cursos
- ✅ Navegação automática entre os cursos cadastrados

### **Modal de Primeiro Acesso:**
- ✅ Componente `FirstVisitModal.jsx` que aparece apenas no primeiro acesso
- ✅ Usa localStorage para controlar se já foi visto

### **Infraestrutura:**
- ✅ Docker Compose com PHP 8.2 + Apache + PostgreSQL
- ✅ Dockerfile customizado com mod_rewrite e mod_headers habilitados
- ✅ Configuração CORS adequada
- ✅ Scripts de inicialização do banco de dados
- ✅ Dados de exemplo pré-carregados

## 🚀 **Como Executar:**

### 1. Backend (Docker):
```bash
cd backend
docker-compose up --build
```

### 2. Frontend (Vite):
```bash
cd frontend
npm install
npm run dev
```

## 📋 **Funcionalidades:**

### **Cursos:**
- Listagem de cursos
- Adicionar novo curso via modal
- Editar cursos existentes
- Excluir cursos

### **Slideshow:**
- Slideshow dinâmico que usa os cursos como slides
- Cada slide mostra um curso específico
- Botão "VER CURSO" que direciona para a seção de cursos
- Navegação com setas e indicadores

### **Modal de Primeiro Acesso:**
- Aparece apenas na primeira visita
- Persistência via localStorage

## 🔧 **Estrutura do Projeto:**

```
revvo-challenge/
├── backend/
│   ├── cursos/index.php          # API CRUD de cursos
│   ├── docker-compose.yml        # Configuração Docker
│   ├── Dockerfile                # Imagem PHP customizada
│   ├── .htaccess                 # Configuração Apache/CORS
│   ├── init.sql                  # Schema do banco
│   └── init_data.sql            # Dados iniciais
├── frontend/
│   ├── src/components/
│   │   ├── CoursesSection.jsx    # Seção de cursos
│   │   ├── Slideshow.jsx         # Slideshow dinâmico

│   │   └── FirstVisitModal.jsx   # Modal primeiro acesso
│   └── ...
```

## 🎯 **Requisitos Atendidos:**

- ✅ CRUD completo para Cursos
- ✅ Slideshow dinâmico usando os cursos como slides
- ✅ Modal que aparece somente no primeiro acesso do usuário
- ✅ Interface moderna e responsiva
- ✅ Backend robusto com PostgreSQL
- ✅ Configuração Docker completa 