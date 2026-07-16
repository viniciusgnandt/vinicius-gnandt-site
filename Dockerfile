FROM node:20-alpine AS build

WORKDIR /build

COPY package.json package-lock.json* ./
RUN npm install --no-fund --no-audit

COPY next.config.ts tsconfig.json tailwind.config.ts postcss.config.mjs ./
COPY app/ ./app/
COPY components/ ./components/
COPY lib/ ./lib/
COPY public/ ./public/
RUN npm run build

FROM nginx:1.27-alpine

LABEL maintainer="Vinícius Gnandt - Consultoria em Tecnologia"
LABEL description="Landing page pessoal - viniciusgnandt.com.br"

# Remove configuração padrão
RUN rm /etc/nginx/conf.d/default.conf

# Copia configuração customizada
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copia o export estático do Next.js
COPY --from=build /build/out/ /usr/share/nginx/html/

# Permissões
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html && \
    chmod 644 /usr/share/nginx/html/index.html

EXPOSE 80

# Healthcheck simples
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
