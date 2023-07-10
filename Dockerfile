FROM alpine:3.15.0

WORKDIR /working_directory

RUN apk add --no-cache git && apk add --no-cache  curl
RUN curl -L -O https://github.com/thoughtworks/talisman/releases/download/v1.23.0/talisman_linux_386

COPY . .

RUN git config --global user.email "secret.scanner" && git config --global user.name "Secret Scanner" &&  \
    git commit -m "scanner commit" --no-verify && git config --global core.autocrlf input && git rm --cached -r . && git reset --hard && \
    git reset --soft HEAD~5

RUN chmod +x talisman_linux_386

CMD ./talisman_linux_386 --githook pre-commit || exit 1