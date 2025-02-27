# How to Preview Site Locally

To preview your Jekyll site locally, follow these steps:

0. **For windows users: Install WSL**:
    - Open PowerShell as Administrator and run the following command:
        ```sh
        wsl --install
        ```
    - Restart your computer if prompted.
    - Once restarted, set up your Linux distribution by following the on-screen instructions.

1. **Install Ruby**:
    - Ensure you have Ruby installed on your system. You can download it from [ruby-lang.org](https://www.ruby-lang.org/en/downloads/).

    or on debian: `sudo apt-get install ruby ruby-dev`
    or on windows: [rubyinstaller.org](https://rubyinstaller.org/downloads/)

    Run `ruby -v` and make sure the version is > 3.0

2. **Install jekyll Bundler**:
    ```sh
    gem update
    gem update --system
    ```

    In this folder: 
    ```sh
    gem install jekyll jekyll-watch bundler
    ```
    
    And on windows:
    ```sh
    gem install wdm
    ```

3. **Install Jekyll and Dependencies**:
    - Navigate to your Jekyll site directory.
    - Run the following command to install Jekyll and other dependencies:
      ```sh
      bundle install
      ```

4. **Build the Site and Start the Server**:
    - Use the following command to build your site and start the local server:
      ```sh
      bundle exec jekyll serve
      ```

5. **Preview the Site**:
    - Open your web browser and go to `http://localhost:4000` to preview your site.

6. **Stop the Server**:
    - To stop the server, press `Ctrl+C` in the terminal where the server is running.

For more detailed information, refer to the [Jekyll documentation](https://jekyllrb.com/docs/).
