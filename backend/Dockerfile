FROM openjdk:11-jre-slim
VOLUME /tmp
ADD ./target/haggle_credit-0.0.1-SNAPSHOT.jar app.jar
ENV JAVA_OPTS=""
ENTRYPOINT ["java", "-jar", "/app.jar"]